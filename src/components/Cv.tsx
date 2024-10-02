import React from 'react';

const CV = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left column: Education and Work Experience */}
        <div className="mb-8">
          {/* Education Section */}
          <div className="mb-2">
            <h2 className="text-xs font-bold mb-2">Education</h2>
            <ul className="list-none space-y-2 text-xs">
              <li>
                Master in Fashion and Textile
                <br />
                <span className="italic">
                  The Royal Danish Academy of Fine Arts, 2020-2022
                </span>
              </li>
              <li>
                Bachelor in Fashion
                <br />
                <span className="italic">
                  The Royal Danish Academy of Fine Arts, 2015-2018
                </span>
              </li>
              <li>
                Bachelor in Textile and Fashion
                <br />
                <span className="italic">
                  Gerrit Rietveld Academie, 2017-2018
                </span>
              </li>
            </ul>
          </div>

          {/* Additional Education Info */}
          <div className="mb-8">
            <ul className="list-none space-y-2 text-xs">
              <li>Lunds School of Art and Design (Art, Design, Architecture)</li>
              <li>Nordic School of Design (Fashion)</li>
              <li>Modefabriken (Fashion)</li>
            </ul>
          </div>

          {/* Work Experience Section */}
          <div className="mb-8">
            <h2 className="text-xs font-bold mb-2">Work Experience</h2>
            <ul className="list-none space-y-2 text-xs">
              <li>
                2024
                <br />
                MalmöVÄV, Designer
                <br />
                <span className="italic text-xs">
                  Ongoing weave design project on behalf of ArkDes, Malmö Stad (power of places) and Layered.
                </span>
              </li>
              <li>
                2023
                <br />
                <span>Tiger of Sweden, Womens- and menswear designer</span>
                <br />
                <span>Tres Bien, Menswear designer</span>
              </li>
              <li>2021<br /> Marimekko, Designer Collab with CD Rebekka Bay</li>
              <li>
                2020
                <br />
                Christobal Balenciaga, Designer Collab
              </li>
              <li>
                2017
                <br />
                Margreeth Olsthoorn, Freelance Designer
              </li>
              <li>
                2014
                <br />
                Asger Juel Larsen, Design Intern
              </li>
            </ul>
          </div>
        </div>

        {/* Right column: Exhibitions and Grants */}
        <div className="mb-8">
          {/* Exhibitions Section */}
          <h2 className="text-xs font-bold mb-1">Exhibitions</h2>
          <div className="mt-4 space-y-2 text-xs">
            <p>2024</p>
            <p>ArkDes, Stockholm, Sweden</p>
            <p>Moderna Museet, residency and group exhibition, Malmö, Sweden</p>
            <p>SSDD, Group exhibition, Malmö, Sweden</p>
            <p>PRE-SSDD for Form Design Center, Group exhibition, Malmö, Sweden</p>
            <p className="mt-2">2023</p>
            <p>Malmöväv, Group exhibition, Malmö, Sweden</p>

            <p className="mt-2">2022</p>
            <p>CPHFW, Group exhibition, Copenhagen, Denmark</p>
            <p>SKT. Petri, Group exhibition, Copenhagen, Denmark</p>
            <p>Moving gallery, Group exhibition, Copenhagen, Denmark</p>

            <p className="mt-2">2021</p>
            <p>Royal Academy, Group exhibition, Copenhagen, Denmark</p>

            <p className="mt-2">2018</p>
            <p>CPHFW, Group exhibition, Copenhagen, Denmark</p>
            <p>SKT. Petri, Group exhibition, Copenhagen, Denmark</p>
          </div>

          {/* Grants and Nominations Section */}
          <div className="mt-8">
            <h2 className="text-xs font-bold mb-2">Grants and Nominations</h2>
            <ul className="list-none space-y-2 text-xs">
              <li>Finalist "Real Leather" London, England, 2022</li>
              <li>Svenskt Tenn, Estrid Ericsson, Stockholm, Sweden, 2022</li>
              <li>Teko, Textilhögskolan i Borås, Sweden, 2022</li>
              <li>Royal Danish Academy, Copenhagen, Denmark, 2022</li>
              <li>Carl Eric Levin, 2022</li>
              <li>Elma Levi, 2022</li>
              <li>Royal Danish Academy, Copenhagen, Denmark, 2022</li>
              <li>Petersenska Hemmet, 2022</li>
              <li>Teko, Borås, Sweden, 2022</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;