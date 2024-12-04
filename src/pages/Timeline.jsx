import React from "react";
import img1 from "../assets/recruitment.png";
import img2 from "../assets/groves.jpg";
import img3 from "../assets/photo_id.jpg";
import img4 from "../assets/interim.jpg";
import img5 from "../assets/viewing.png";
import img6 from "../assets/explosion.jpg";
import "../styles/Timeline.scss";

function Timeline() {
  return (
    <div className="section timeline">
      <div className="header">
        <h1>The War</h1>
        <hr style={{ color: "#f2f2f2", width: "80%" }} />
      </div>
      <div className="content">
        <div className="spine" />
        <div className="row">
          <p className="desc">On October 21, 1941, Ernest Lawrence brought Oppenheimer into the Manhattan Project, assigning him to oversee bomb-design research under Arthur Compton. Shortly after, James B. Conant tasked him with leading work on fast neutron calculations, earning him the title "Coordinator of Rapid Rupture," a role critical to understanding fast neutron chain reactions in atomic bombs. Oppenheimer organized a summer school at Berkeley, bringing together European physicists and his students, including Hans Bethe and Edward Teller, to outline the steps needed for bomb development.</p>
          <p className="date right">1941</p>
          <img src={img1} />
        </div>
        <div className="row">
          <img src={img2} />
          <p className="date left">1942</p>
          <p className="desc">In September 1942, Brigadier General Leslie Groves was appointed director of the Manhattan Project and soon selected Oppenheimer to lead its secret weapons laboratory. Despite concerns about Oppenheimer's left-wing political views, lack of a Nobel Prize, and inexperience managing large projects, Groves was impressed by his interdisciplinary knowledge and practical understanding of the project's complexities. Groves believed Oppenheimer's ambition and grasp of physics, chemistry, metallurgy, ordnance, and engineering would drive the project to success. Together, they decided to establish a centralized, secure research facility in a remote location, pivotal to the project's cohesion and secrecy.</p>
        </div>
        <div className="row">
          <p className="desc">Oppenheimer proposed New Mexico as the site for the Manhattan Project's laboratory, favoring a flat mesa near Santa Fe that he knew from his time at the Los Alamos Ranch School. Despite concerns over road access and water supply, the site was chosen and quickly transformed into the Los Alamos Laboratory, incorporating existing school buildings alongside hastily constructed new ones. Oppenheimer recruited leading physicists, whom he called "luminaries," to work there. Initially planned as a military lab, Oppenheimer failed the Army physical due to health issues, and the idea of commissioning scientists was abandoned. Instead, the University of California managed the lab under War Department contract. The project rapidly expanded, with Los Alamos growing from a few hundred staff in 1943 to over 6,000 by 1945.</p>
          <p className="date right">1943</p>
          <img src={img3} />
        </div>
        <div className="row">
          <img src={img4} />
          <p className="date left">1945</p>
          <p className="desc">In May 1945, the Interim Committee was formed to provide guidance on wartime and postwar policies related to nuclear energy. A scientific panel, including Oppenheimer, Arthur Compton, Enrico Fermi, and Ernest Lawrence, was established to advise the committee on technical matters. The panel's presentation included not only an assessment of the atomic bomb's physical effects but also its potential military and political consequences. This included discussions on sensitive topics, such as whether the Soviet Union should be informed about the weapon before its use against Japan.</p>
        </div>
        <div className="row">
          <p className="desc">On the morning of July 16, 1945, near Alamogordo, New Mexico, the first nuclear weapon was successfully tested at the Los Alamos Laboratory. Oppenheimer had code-named the site "Trinity," inspired by the Holy Sonnets of John Donne, whose work he had been introduced to by Jean Tatlock, who tragically took her own life in 1944. Brigadier General Thomas Farrell, who was with Oppenheimer in the control bunker, recalled Oppenheimer growing tense as the countdown ended, holding onto a post for support. When the explosion occurred, Oppenheimer's face softened with a profound sense of relief. His brother Frank later remembered Oppenheimer's first words: "I guess it worked."</p>
          <p className="date right">1945</p>
          <img src={img5} />
        </div>
        <div className="row">
          <img src={img6} style={{ filter: 'saturate(0)' }} />
          <p className="date left">1945</p>
          <p className="desc" style={{ fontWeight: 300 }}>On August 6, 1945, the U.S. dropped the first atomic bomb, "Little Boy," on Hiroshima, a city of military and industrial importance, instantly killing tens of thousands and causing widespread devastation. Three days later, on August 9, a second bomb, "Fat Man," was dropped on Nagasaki, a major port and industrial city, killing more than 40,000 people. The bombings, which unleashed unprecedented destruction and radiation effects, played a key role in Japan's decision to surrender on August 15, 1945, effectively ending the war. However, the bombings also raised ethical and humanitarian debates that continue to this day.</p>
        </div>
        <div className="row">
          <p className="desc" style={{ fontWeight: 350 }}>On August 6, 1945, the U.S. dropped the first atomic bomb, "Little Boy," on Hiroshima, a city of military and industrial importance, instantly killing tens of thousands and causing widespread devastation. Three days later, on August 9, a second bomb, "Fat Man," was dropped on Nagasaki, a major port and industrial city, killing more than 40,000 people. The bombings, which unleashed unprecedented destruction and radiation effects, played a key role in Japan's decision to surrender on August 15, 1945, effectively ending the war. However, the bombings also raised ethical and humanitarian debates that continue to this day.</p>
          <p className="date right">1945</p>
          <img src={img6} style={{ filter: 'saturate(20%)' }} />
        </div>
        <div className="row">
          <img src={img6} style={{ filter: 'saturate(40%)' }} />
          <p className="date left">1945</p>
          <p className="desc" style={{ fontWeight: 400 }}>On August 6, 1945, the U.S. dropped the first atomic bomb, "Little Boy," on Hiroshima, a city of military and industrial importance, instantly killing tens of thousands and causing widespread devastation. Three days later, on August 9, a second bomb, "Fat Man," was dropped on Nagasaki, a major port and industrial city, killing more than 40,000 people. The bombings, which unleashed unprecedented destruction and radiation effects, played a key role in Japan's decision to surrender on August 15, 1945, effectively ending the war. However, the bombings also raised ethical and humanitarian debates that continue to this day.</p>
        </div>
        <div className="row">
          <p className="desc" style={{ fontWeight: 450 }}>On August 6, 1945, the U.S. dropped the first atomic bomb, "Little Boy," on Hiroshima, a city of military and industrial importance, instantly killing tens of thousands and causing widespread devastation. Three days later, on August 9, a second bomb, "Fat Man," was dropped on Nagasaki, a major port and industrial city, killing more than 40,000 people. The bombings, which unleashed unprecedented destruction and radiation effects, played a key role in Japan's decision to surrender on August 15, 1945, effectively ending the war. However, the bombings also raised ethical and humanitarian debates that continue to this day.</p>
          <p className="date right">1945</p>
          <img src={img6} style={{ filter: 'saturate(60%)' }} />
        </div>
        <div className="row">
          <img src={img6} style={{ filter: 'saturate(80%)' }} />
          <p className="date left">1945</p>
          <p className="desc" style={{ fontWeight: 500 }}>On August 6, 1945, the U.S. dropped the first atomic bomb, "Little Boy," on Hiroshima, a city of military and industrial importance, instantly killing tens of thousands and causing widespread devastation. Three days later, on August 9, a second bomb, "Fat Man," was dropped on Nagasaki, a major port and industrial city, killing more than 40,000 people. The bombings, which unleashed unprecedented destruction and radiation effects, played a key role in Japan's decision to surrender on August 15, 1945, effectively ending the war. However, the bombings also raised ethical and humanitarian debates that continue to this day.</p>
        </div>
        <div className="row">
          <p className="desc" style={{ fontWeight: 550 }}>On August 6, 1945, the U.S. dropped the first atomic bomb, "Little Boy," on Hiroshima, a city of military and industrial importance, instantly killing tens of thousands and causing widespread devastation. Three days later, on August 9, a second bomb, "Fat Man," was dropped on Nagasaki, a major port and industrial city, killing more than 40,000 people. The bombings, which unleashed unprecedented destruction and radiation effects, played a key role in Japan's decision to surrender on August 15, 1945, effectively ending the war. However, the bombings also raised ethical and humanitarian debates that continue to this day.</p>
          <p className="date right">1945</p>
          <img src={img6} style={{ filter: 'saturate(100%)' }} />
        </div>
        <div className="row">
          <img src={img6} style={{ filter: 'saturate(120%)' }} />
          <p className="date left">1945</p>
          <p className="desc" style={{ fontWeight: 600 }}>On August 6, 1945, the U.S. dropped the first atomic bomb, "Little Boy," on Hiroshima, a city of military and industrial importance, instantly killing tens of thousands and causing widespread devastation. Three days later, on August 9, a second bomb, "Fat Man," was dropped on Nagasaki, a major port and industrial city, killing more than 40,000 people. The bombings, which unleashed unprecedented destruction and radiation effects, played a key role in Japan's decision to surrender on August 15, 1945, effectively ending the war. However, the bombings also raised ethical and humanitarian debates that continue to this day.</p>
        </div>
        <div className="row">
          <p className="desc" style={{ fontWeight: 650 }}>On August 6, 1945, the U.S. dropped the first atomic bomb, "Little Boy," on Hiroshima, a city of military and industrial importance, instantly killing tens of thousands and causing widespread devastation. Three days later, on August 9, a second bomb, "Fat Man," was dropped on Nagasaki, a major port and industrial city, killing more than 40,000 people. The bombings, which unleashed unprecedented destruction and radiation effects, played a key role in Japan's decision to surrender on August 15, 1945, effectively ending the war. However, the bombings also raised ethical and humanitarian debates that continue to this day.</p>
          <p className="date right">1945</p>
          <img src={img6} style={{ filter: 'saturate(140%)' }} />
        </div>
      </div>
    </div>
  )
}

export default Timeline;