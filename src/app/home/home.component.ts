import { Component } from '@angular/core';
import {ButtonComponent} from "../items/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  template: `
    <h1>
      home works!
    </h1>
    <p>Kombucha tumeric meditation tattooed squid. Copper mug vice occupy air plant coloring book disrupt. Fixie poutine
      cardigan, helvetica vegan direct trade irony wolf copper mug hella synth. Live-edge actually meditation, sartorial
      tofu celiac selvage plaid kale chips distillery williamsburg mumblecore fit. Semiotics chia taxidermy tattooed,
      hashtag vice meditation vexillologist marfa pickled mumblecore.</p><p></p><p>Unicorn beard vegan crucifix pork
      belly. Tumeric live-edge keffiyeh selfies chambray hell of brunch tote bag jawn blog truffaut. Big mood cray DIY
      vinyl ramps. VHS irony authentic heirloom cred synth, church-key fixie.</p><p></p><p>Migas hashtag cloud bread
      microdosing PBR&B franzen. Live-edge grailed praxis hashtag gluten-free snackwave. Next level bitters
      lumbersexual, hell of kombucha gastropub vinyl mukbang. Fit meh bespoke, DIY iceland farm-to-table master cleanse
      celiac hexagon fixie selvage Brooklyn authentic ramps. Cornhole bushwick freegan schlitz aesthetic, authentic
      Brooklyn tilde dreamcatcher. Roof party gluten-free jianbing four dollar toast ramps blackbird spyplane taxidermy
      big mood vape everyday carry direct trade.</p><p></p><p>Live-edge affogato normcore offal 90's tonx, fixie health
      goth enamel pin edison bulb portland. Umami activated charcoal biodiesel chambray four dollar toast art party
      snackwave polaroid af. Woke church-key tofu VHS organic enamel pin glossier flannel blog ramps meh photo booth.
      Narwhal keytar hashtag, bicycle rights hella tumeric post-ironic food truck gluten-free DIY. Tattooed hella yuccie
      williamsburg church-key hoodie tofu chia cold-pressed selvage beard ennui tonx gastropub literally. Typewriter
      drinking vinegar viral hexagon twee succulents.</p><p></p><p>Affogato bespoke tacos cronut big mood, try-hard
      pickled vinyl activated charcoal ennui synth. YOLO literally pinterest edison bulb. Hella meditation ethical 3
      wolf moon, you probably haven't heard of them hexagon semiotics pickled aesthetic church-key listicle vibecession
      fit vexillologist hashtag. Street art squid chicharrones roof party blue bottle, marxism chambray cupping palo
      santo marfa chartreuse sustainable fit try-hard. Whatever organic gorpcore DIY forage. Tofu bruh banjo flexitarian
      typewriter taiyaki fashion axe sustainable. Hoodie letterpress paleo, church-key kinfolk small batch before they
      sold out try-hard green juice YOLO normcore glossier literally readymade chicharrones.</p><p></p><p>Cronut
      humblebrag affogato venmo, cardigan sus hashtag vegan. Kale chips readymade pork belly kogi. Pork belly vice
      raclette echo park vape poke kitsch PBR&B blog quinoa. Pok pok celiac cray, chia lumbersexual twee franzen
      kickstarter four dollar toast drinking vinegar chicharrones.</p><p></p><p>Chillwave wayfarers before they sold out
      shaman succulents plaid franzen knausgaard jianbing edison bulb brunch. Cold-pressed ascot typewriter meh, YOLO
      yes plz craft beer cray leggings hoodie DIY gastropub ethical. Yes plz mustache ugh bushwick fixie, occupy pickled
      four loko kitsch pork belly activated charcoal swag umami. Man braid viral put a bird on it gorpcore gentrify sus
      praxis solarpunk kale chips gastropub man bun ascot. Cred yr williamsburg, fingerstache post-ironic sriracha
      affogato gorpcore you probably haven't heard of them lumbersexual master cleanse pop-up mustache fam wolf.</p>
    <p></p><p>La croix pinterest irony asymmetrical try-hard shabby chic. Shabby chic leggings health goth snackwave
      williamsburg subway tile blue bottle food truck lyft meditation irony adaptogen. Chillwave air plant solarpunk raw
      denim tumeric gastropub sus fingerstache plaid enamel pin af craft beer. Synth normcore listicle marfa locavore
      echo park edison bulb cupping bruh palo santo jean shorts lomo tofu four loko marxism. La croix poke ennui health
      goth vape freegan. Four loko gochujang raw denim mukbang.</p><p></p><p>Taiyaki readymade succulents, migas chia
      meditation hella. Affogato blue bottle cupping ascot stumptown master cleanse. Taxidermy copper mug poutine,
      occupy solarpunk cray seitan hella unicorn normcore yes plz biodiesel. Fanny pack viral sus hot chicken jean
      shorts heirloom vinyl. Etsy locavore you probably haven't heard of them mlkshk typewriter celiac farm-to-table,
      praxis offal same.</p><p></p><p>Wayfarers brunch messenger bag tote bag enamel pin chia unicorn retro cray 3 wolf
      moon coloring book kinfolk distillery. Raw denim banjo coloring book ethical, yr mumblecore disrupt skateboard
      bicycle rights grailed shaman fixie swag bushwick. Adaptogen vexillologist man bun williamsburg succulents
      tattooed trust fund flexitarian normcore pitchfork bruh cornhole. Dreamcatcher ramps af selfies. Pork belly
      mixtape Brooklyn, drinking vinegar chartreuse flexitarian humblebrag echo park cardigan offal schlitz +1 fanny
      pack. Pabst salvia enamel pin succulents roof party kogi poutine.</p><p></p><p>Woke enamel pin blackbird spyplane,
      cronut pour-over la croix wayfarers +1 pitchfork mukbang solarpunk lumbersexual swag stumptown. Drinking vinegar
      try-hard tofu scenester ethical distillery VHS mumblecore chillwave four dollar toast. Echo park skateboard cray
      marxism wayfarers readymade, hashtag butcher. Bushwick literally adaptogen drinking vinegar wayfarers truffaut
      fanny pack, hell of +1 lo-fi small batch mustache yr locavore bodega boys. DIY fashion axe flexitarian DSA palo
      santo. Vibecession irony banh mi austin yuccie. Jean shorts viral DSA marfa XOXO big mood microdosing.</p><p></p>
    <p>Meh selvage same post-ironic chillwave, literally copper mug air plant slow-carb chicharrones. Literally vegan
      pug butcher marxism fanny pack flexitarian seitan synth. Vibecession heirloom kale chips, taiyaki crucifix synth
      vape. Pug food truck cold-pressed coloring book yuccie cronut.</p><p></p><p>Dummy text? More like dummy thicc
      text, amirite?</p>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  handleClick(event: Event) {
    console.log('Button clicked!', event);
    // Handle button click logic here
  }
}
