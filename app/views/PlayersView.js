export const PlayersView = `
  <section class="row px-5">

    <!-- SECTION Active Player -->
    <div class="col-8">
      <section id="active-player" class="row flex-column align-items-center">
      </section>
    </div>

    <!-- SECTION Listed Players -->
    <div class="col-4 d-flex flex-column my-5 p-5 justify-content-between borders list-text text-center">
      <div id="player-list">
        
      </div>
      <form onsubmit="app.PlayersController.createPlayer(event)">
        <input type="text" placeholder="Enter Name" name="name" />
      </form>
    </div>
  </section>`