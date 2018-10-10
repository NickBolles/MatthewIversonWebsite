import React, { Component } from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/UI/PrimarySearchAppBar";
import ProfileIntro from "./Components/UI/ProfileIntro";
import Biography from "./Sections/Biography";
import PentrationTesting from "./Sections/PentrationTesting";
import PentrationTest from "./Components/UI/PentrationTesting";
import Programming from "./Sections/Programming";
import ControlledExpansionPanels from "./Components/UI/ControlledExpansionPanels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <PrimarySearchAppBar />
        </div>
        <section id="Profile">
          <ProfileIntro />
        </section>
        <section>
        <ControlledExpansionPanels />
        </section>
        <section id="PentrationTesting">
          <PentrationTesting />
        </section>
        <section id="Books">
          Favorite Books
          <div>
            Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate
            velit malesuada posuere dis cras, nec vehicula magna cursus semper
            sapien eros dictumst praesent commodo fermentum. Ligula rhoncus
            nulla elementum pretium euismod dictumst odio suscipit faucibus nisi
            magnis, neque ullamcorper aptent ultrices viverra phasellus nullam
            interdum quam. Vehicula sollicitudin ridiculus aliquet libero
            eleifend cum arcu, facilisi ac sociosqu consequat senectus aliquam
            id erat, suspendisse orci praesent tellus ante ultricies. Porttitor
            odio semper convallis libero magna et facilisis erat, id hendrerit
            pulvinar blandit feugiat parturient natoque, nullam senectus commodo
            rhoncus lobortis inceptos sed. Feugiat sed justo quis montes dis
            massa accumsan rutrum ad luctus aenean augue vel posuere inceptos,
            ligula molestie curae metus cubilia morbi nibh donec sodales platea
            sagittis faucibus semper elementum. Aptent scelerisque semper vitae
            augue magna torquent praesent nascetur fringilla, per sapien mi quam
            porttitor sodales condimentum justo, litora tempus sed vel accumsan
            placerat urna potenti.Lorem ipsum dolor sit amet consectetur
            adipiscing elit vulputate velit malesuada posuere dis cras, nec
            vehicula magna cursus semper sapien eros dictumst praesent commodo
            fermentum. Ligula rhoncus nulla elementum pretium euismod dictumst
            odio suscipit faucibus nisi magnis, neque ullamcorper aptent
            ultrices viverra phasellus nullam interdum quam. Vehicula
            sollicitudin ridiculus aliquet libero eleifend cum arcu, facilisi ac
            sociosqu consequat senectus aliquam id erat, suspendisse orci
            praesent tellus ante ultricies. Porttitor odio semper convallis
            libero magna et facilisis erat, id hendrerit pulvinar blandit
            feugiat parturient natoque, nullam senectus commodo rhoncus lobortis
            inceptos sed. Feugiat sed justo quis montes dis massa accumsan
            rutrum ad luctus aenean augue vel posuere inceptos, ligula molestie
            curae metus cubilia morbi nibh donec sodales platea sagittis
            faucibus semper elementum. Aptent scelerisque semper vitae augue
            magna torquent praesent nascetur fringilla, per sapien mi quam
            porttitor sodales condimentum justo, litora tempus sed vel accumsan
            placerat urna potenti.Lorem ipsum dolor sit amet consectetur
            adipiscing elit vulputate velit malesuada posuere dis cras, nec
            vehicula magna cursus semper sapien eros dictumst praesent commodo
            fermentum. Ligula rhoncus nulla elementum pretium euismod dictumst
            odio suscipit faucibus nisi magnis, neque ullamcorper aptent
            ultrices viverra phasellus nullam interdum quam. Vehicula
            sollicitudin ridiculus aliquet libero eleifend cum arcu, facilisi ac
            sociosqu consequat senectus aliquam id erat, suspendisse orci
            praesent tellus ante ultricies. Porttitor odio semper convallis
            libero magna et facilisis erat, id hendrerit pulvinar blandit
            feugiat parturient natoque, nullam senectus commodo rhoncus lobortis
            inceptos sed. Feugiat sed justo quis montes dis massa accumsan
            rutrum ad luctus aenean augue vel posuere inceptos, ligula molestie
            curae metus cubilia morbi nibh donec sodales platea sagittis
            faucibus semper elementum. Aptent scelerisque semper vitae augue
            magna torquent praesent nascetur fringilla, per sapien mi quam
            porttitor sodales condimentum justo, litora tempus sed vel accumsan
            placerat urna potenti.
          </div>
        </section>
        <section id="Contact">
          Contact
          <div>
            Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate
            velit malesuada posuere dis cras, nec vehicula magna cursus semper
            sapien eros dictumst praesent commodo fermentum. Ligula rhoncus
            nulla elementum pretium euismod dictumst odio suscipit faucibus nisi
            magnis, neque ullamcorper aptent ultrices viverra phasellus nullam
            interdum quam. Vehicula sollicitudin ridiculus aliquet libero
            eleifend cum arcu, facilisi ac sociosqu consequat senectus aliquam
            id erat, suspendisse orci praesent tellus ante ultricies. Porttitor
            odio semper convallis libero magna et facilisis erat, id hendrerit
            pulvinar blandit feugiat parturient natoque, nullam senectus commodo
            rhoncus lobortis inceptos sed. Feugiat sed justo quis montes dis
            massa accumsan rutrum ad luctus aenean augue vel posuere inceptos,
            ligula molestie curae metus cubilia morbi nibh donec sodales platea
            sagittis faucibus semper elementum. Aptent scelerisque semper vitae
            augue magna torquent praesent nascetur fringilla, per sapien mi quam
            porttitor sodales condimentum justo, litora tempus sed vel accumsan
            placerat urna potenti. Lorem ipsum dolor sit amet consectetur
            adipiscing elit vulputate velit malesuada posuere dis cras, nec
            vehicula magna cursus semper sapien eros dictumst praesent commodo
            fermentum. Ligula rhoncus nulla elementum pretium euismod dictumst
            odio suscipit faucibus nisi magnis, neque ullamcorper aptent
            ultrices viverra phasellus nullam interdum quam. Vehicula
            sollicitudin ridiculus aliquet libero eleifend cum arcu, facilisi ac
            sociosqu consequat senectus aliquam id erat, suspendisse orci
            praesent tellus ante ultricies. Porttitor odio semper convallis
            libero magna et facilisis erat, id hendrerit pulvinar blandit
            feugiat parturient natoque, nullam senectus commodo rhoncus lobortis
            inceptos sed. Feugiat sed justo quis montes dis massa accumsan
            rutrum ad luctus aenean augue vel posuere inceptos, ligula molestie
            curae metus cubilia morbi nibh donec sodales platea sagittis
            faucibus semper elementum. Aptent scelerisque semper vitae augue
            magna torquent praesent nascetur fringilla, per sapien mi quam
            porttitor sodales condimentum justo, litora tempus sed vel accumsan
            placerat urna potenti.
          </div>
        </section>
      </div>
    );
  }
}

export default App;
