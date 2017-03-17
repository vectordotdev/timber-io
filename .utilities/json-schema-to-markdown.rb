require "json"
require "net/http"
require "openssl"
require "uri"

class SchemaResolver
  TIMBER_API_URI = URI.parse('https://raw.githubusercontent.com')

  class << self
    def get
      http = Net::HTTP.new(TIMBER_API_URI.host, TIMBER_API_URI.port)
      http.use_ssl = true
      http.verify_mode = OpenSSL::SSL::VERIFY_NONE

      req = Net::HTTP::Get.new("/timberio/log-event-json-schema/3d1bbce15e57c24d0b6ffc0ffa818e413f5950c7/schema.json")

      res = http.start do |http|
        http.request(req)
      end

      JSON.parse(res.body)
    end
  end
end

class MarkdownRenderer
  def initialize(schema)
    @schema = schema
  end

  def render
    markdown = ""

    context_schema = @schema["properties"]["context"]
    markdown << "## Context Fields\n\n"
    markdown << context_schema.fetch("description") + "\n\n"
    markdown << fields_table("context", context_schema.fetch("properties"))
    markdown << "\n\n"

    event_schema = @schema["properties"]["event"]
    markdown << "## Event Fields\n\n"
    markdown << event_schema.fetch("description") + "\n\n"
    markdown << fields_table("event", event_schema.fetch("properties"))

    # event_properties = @schema["properties"]["event"]["properties"]
    # event_properties.each do |domain, domain_schema|
    #   if domain == "custom"

    #   else
    #     markdown << "## #{domain} Event Fields\n\n"

    #     if !domain_schema["description"]
    #       raise "#{domain} does not have a description!"
    #     end

    #     if !domain_schema["properties"]
    #       raise domain_schema.inspect
    #     end

    #     markdown << domain_schema.fetch("description") + "\n\n\n"
    #     markdown << types("event", domain_schema.fetch("properties"))
    #   end
    # end

    markdown
  end

  private
    def fields_table(name, properties)
      markdown = ""
      markdown << "Name | Type | Description\n"
      markdown << "-----|------|------------\n"

      columns = columns(properties)

      columns.each do |column|
        restrictions = column[:restrictions].select { |_name, value| value != nil }.collect { |name, value| "`#{name}: #{value}`" }.join(", ")
        markdown << "`#{column[:name]}` | `#{column[:type]}` | #{column[:description]} #{restrictions}\n"
      end

      markdown
    end

    def columns(properties, ancestors = [])
      columns = []

      properties.each do |name, schema|
        if schema["$ref"]
          schema = get_ref(schema["$ref"])
        end

        if !schema["type"]
          raise schema.inspect
        end

        path = ancestors
        if !["server_side_app"].include?(name)
          path += [name]
        end

        case schema.fetch("type")
        when "object"
          if schema["properties"]
            columns += columns(schema.fetch("properties"), path)
          end
        else
          columns << {
            name: path.join("."),
            type: schema.fetch("type"),
            description: schema.fetch("description"),
            restrictions: {
              "max-length" => schema["maxLength"],
              "minimum" => schema["minimum"],
              "maximum" => schema["maximum"]
            }
          }
        end
      end

      columns.sort_by { |c| c[:name] }
    end

    def get_ref(ref)
      name = ref.split("/").last
      @schema["definitions"][name]
    end
end

schema = SchemaResolver.get
puts MarkdownRenderer.new(schema).render