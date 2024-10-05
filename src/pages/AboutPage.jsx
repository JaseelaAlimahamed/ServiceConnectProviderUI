import React from "react";

const dummyData = [
  {
    title: "dasdadas",
    paragraphs: [
      "At enim hic etiam dolore. Dulce amarum, leve asperum, prope longe, stare movere, quadratum rotundum. At certe gravius. Nullus est igitur cuiusquam dies natalis. Paulum, cum regem Persem captum adduceret, eodem flumine invectio?",
      "Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare. Sed finge non solum calidum eum, qui aliquid improbe faciat, verum etiam praepetentem, ut M. Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit."
    ]
  },
  {
    title: "sljkhbhad",
    paragraphs: [
      "Ut proverbia non nulla veriora sint quam vestra dogmata. Tamen aberranus a proposito, et, ne longius, prorsus, inquam, Piso, si ista mala sunt, placet. Omnes enim luclumundum motum, quo sensus hilaretur.",
      "Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim. Dolor ergo, id est summum malum, metuetur semper, etiam si non aderit."
    ]
  }
];

function AboutPage() {
  return (
    <>
  
   
    <div className="h-screen flex justify-center items-center">
    <div className="bg-primary p-4 sm:p-6 md:p-8 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto  flex flex-col ">
      {dummyData.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">{section.title}</h2>
          {section.paragraphs.map((paragraph, i) => (
            <p key={i} className={`mt-${i === 0 ? 2 : 4} text-medium-gray`}>
              {paragraph}
            </p>
          ))}
        </div>
       
      ))}
    </div>
    </div>
    </>
  );
}

export default AboutPage;
