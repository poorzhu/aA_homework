class LRUCache
    def initialize(size)
        @cache = []
        @size = size
    end

    def count
      # returns number of elements currently in cache
        @cache.size
    end

    def add(el)
      # adds element to cache according to LRU principle

      if count < @size && !@cache.include?(el)
        @cache.push(el)
      elsif count >= @size
        @cache.shift
        @cache.push(el)
      elsif @cache.include?(el)
        @cache.delete(el)
        @cache.push(el)
      end
    end

    def show
      # shows the items in the cache, with the LRU item first

      p @cache
      nil
    end

    private
    # helper methods go here!

  end