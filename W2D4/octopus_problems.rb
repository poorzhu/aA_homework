def sluggish_octopus(fishes)    
    longest_fish = ""
    
    fishes.each_with_index do |fish1, i1|
        fishes.each_with_index do |fish2, i2|
            if i2 > i1
                case fish1.length <=> fish2.length
                when -1
                    longest_fish = fish2
                when 
            end
        end
    end

    longest_fish
end

def merge_sort(array)
    prc ||= Proc.new { |x, y| x <=> y }

    return array if array.count <= 1

    midpoint = array.count / 2
    sorted_left = merge_sort(array.take(midpoint), &prc)
    sorted_right = merge_sort(array.drop(midpoint), &prc)

    merge(sorted_left, sorted_right, &prc)
end

def merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
        case prc.call(left.first, right.first)
        when -1
        merged << left.shift
        when 0
        merged << left.shift
        when 1
        merged << right.shift
        end
    end

    merged.concat(left)
    merged.concat(right)

    merged
end

def dominant_octopus(array)
    sorted = merge_sort(array) { |a,b| a.length <=> b.length }
    sorted.first
end

def clever_octopus(array)
    array.inject { |long_fish, fish| long_fish.length > fish.length ? long_fish : fish }
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(direction, tiles_array)
    tiles_array.find_index(direction)
end

tiles_hash = {}
tiles_array.each_with_index { |tile, i| tiles_hash[tile] = i }

def constant_dance(direction, tiles_hash)
    tiles_hash[direction]
end
