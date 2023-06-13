describe("Player", () => {
  let player;
  let song;

  beforeEach(() => {
    player = new Player();
    song = new Song();
  });

  describe('play', () => {
    it('should play', () => {
      player.play(song)
      expect(player).toBePlaying(song)
    })
  })

  describe('makeFavorite', () => {
    it('should persist as a favorite song', () => {
      spyOn(song, 'persistFavoriteStatus')
      player.play(song)
      player.makeFavorite()
      expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true)
    })
  })
});
