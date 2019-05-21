require "byebug"

class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { [:stone, :stone, :stone, :stone] }
    @cups[6] = []
    @cups[13] = []
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    if start_pos < 0 || start_pos > 13
      raise ArgumentError.new "Invalid starting cup"
    elsif @cups[start_pos].empty?
      raise ArgumentError.new "Starting cup is empty"
    end
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos]
    @cups[start_pos] = []
    case current_player_name == @name1
    when true
      other_player_cup = 13
    when false
      other_player_cup = 6
    end

    if start_pos == other_player_cup - 1
      start_pos = (start_pos + 2) % @cups.length
    else
      start_pos = (start_pos + 1) % @cups.length
    end

    until stones.empty?
      @cups[start_pos] << stones.shift if start_pos != other_player_cup
      if !stones.empty?
        start_pos = (start_pos + 1) % @cups.length
      end
    end

    render
    # debugger
    next_turn(start_pos)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx

    if @cups[ending_cup_idx].empty?
      return :switch
    # elsif 
    #   return :prompt
    end

  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
