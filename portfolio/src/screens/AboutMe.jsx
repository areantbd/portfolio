import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../contexts/LangContext";

function AboutMe() {
  const [lang, setLang] = useState(undefined);
  const languaje = useContext(LangContext);

  useEffect(() => {
    setLang(languaje);
  }, [languaje]);

  return lang?.lang === "esp" ? (
    <div className="container py-5">
      <p>
        Mi nombre es <b>Iván Rodríguez</b> y esto es un poquito de mi:
      </p>{" "}
      <br />
      <p>
        Nací en Taboada un pueblo de la provincia de Lugo en Galicia en junio de
        1987, allí viví hasta 2007.
      </p>
      <p>
        En 2005 empecé un ciclo de grado medio en Electromecánica de vehículos,
        profesión que llevo desempeñando desde 2007, al terminar los estudios.
        Eso me llevó a vivir unos años en Ourense y otros en Lugo, después de
        eso me moví a Vigo, ciudad donde estoy viviendo desde hace unos cuantos
        años. Como mecánico he trabajado en diferentes talleres, desarrollando
        diferentes roles, desde mecánico de servicio rápido hasta responsable de
        taller. Los últimos 4 años he estado trabajando en desarrollo de
        vehículos eléctricos, es aquí en donde he empezado a tocar/ver programación.
      </p>
      <p>
        A raíz de esto y por recomendación de un amigo que hizo el BootCamp un
        año antes que yo, es que empiezo a investigar y a aprender de manera
        autodidacta algo de HTML y CSS sobre todo. En abril de 2022 finalmente y
        coincidiendo con un permiso de paternidad doy el paso y me inscribo en
        el BootCamp de desarrollo web de Ironhack. Han sido 24 semanas muy
        intensas, pero a la vez muy divertidas, en las que he aprendido mucho
        sobre código y sobre mi.
      </p>
      <p>
        He descubierto una profesión que me apasiona y que sacia mi curiosidad,
        ya que siempre tienes algo que aprender y a la vez me permite ser
        creativo, porque en programación, el límite lo pone la imaginación.
        Puedes hacer literalmente todo lo que se te ocurra y eso me encanta. Me
        gustaba de mis últimos trabajos, el poder crear piezas, componentes, de
        un trozo de metal, pero siempre tienes unos límites físicos que no
        puedes saltarte, en programación no existen esos límites.
      </p>
      <p>
        Personalmente, soy un poco tímido al principio pero enseguida cojo
        confianza, me gusta mucho practicar buceo, hacer senderismo, la
        fotografía y conocer lugares nuevos. <br />
        Laboralmente, soy una persona responsable, me gusta aprender y al mismo
        tiempo disfruto enseñando lo que ya sé. Bueno trabajando en equipo, pero
        me defiendo bien también en solitario.
      </p>
    </div>
  ) : (
    <div className="container pt-5">
      <p>
        My name is <b>Iván Rodríguez</b> and this is a little bit about me:
      </p>{" "}
      <br />
      <p>
        I was born in Taboada a village in the province of Lugo in Galicia in
        June 1987, I lived there until 2007.
      </p>
      <p>
        In 2005 I started a medium grade cycle in Vehicle Electromechanics, a
        profession that I have been doing since 2007, when I finished my
        studies. That led me to live a few years in Ourense and others in Lugo,
        after that I moved to Vigo, where I've been living for a few years now.
        As a mechanic I have worked in different workshops, developing different
        roles, from quick service mechanic to workshop manager. The last 4 years
        I have been working in electric vehicle development, where I started to
        play/see programming.
      </p>
      <p>
        As a result of this and on the recommendation of a friend who did the
        BootCamp a year before me, is that I start to investigate and learn in a
        self-taught way some HTML and CSS above all. In April 2022 finally and
        coinciding with a paternity leave I take the step and enroll in the
        Ironhack web development BootCamp. It has been a very intense 24 weeks,
        but at the same time very fun, in which I have learned a lot about code
        and about myself.
      </p>
      <p>
        I have discovered a profession that I love and that satisfies my
        curiosity, since you always have something to learn and at the same time
        allows me to be creative, because in programming, the limit is set by
        your imagination. You can literally do anything you can think of and I
        love that. I liked my last jobs, being able to create parts, components,
        from a piece of metal, but you always have some physical limits that you
        can not skip, in programming there are no such limits.
      </p>
      <p>
        Personally, I'm a bit shy at first but I quickly gain confidence, I love
        diving, hiking, photography and seeing new places. <br />
        I'm a responsible person, I like to learn and at the same time I enjoy
        teaching what I already know, I'm good working in a team, but I'm also
        good on my own.
      </p>
    </div>
  );
}

export default AboutMe;
