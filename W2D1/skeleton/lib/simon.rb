class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    take_turn until @game_over
    if @game_over
      game_over_message
      reset_game
    end
  end

  def take_turn
    show_sequence
    require_sequence
    if !@game_over
      round_success_message 
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
  end

  def require_sequence
    @sequence_length.times do |turn|
      guess = gets.chomp
      if guess != @seq[turn]
        @game_over = true
        break
      end
    end

  end

  def add_random_color
    p @seq << COLORS.sample
    sleep(2)
    system("clear")
  end

  def round_success_message
    p "Success."
  end

  def game_over_message
    p "Game over."
  end

  def reset_game
    @game_over = false
    @sequence_length = 1
    @seq = []
  end
end

Simon.new.play