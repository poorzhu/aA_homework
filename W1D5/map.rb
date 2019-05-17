class Map
    def initialize
        @map = []
    end

    def set(key, value)
        index = @map.find_index { |pair| pair.first == key }
        index.nil? ? @map << [key, value] : @map[index][1] = value
    end

    def get(key)
        index = @map.find_index { |pair| pair.first == key }
        index ? @map[index][1] : nil
    end

    def delete(key)
        @map.delete_at(@map.find_index { |pair| pair.first == key })
    end

    def show
        @map
    end
end