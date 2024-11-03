import React from 'react';

const CV = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left column: Education and Work Experience */}
        <div className="mb-8">
          {/* Education Section */}
          <div className="mb-2">
            <h2 className="text-xs font-bold mb-1">Education</h2>
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex">
                <div className="mr-8">2020-2022</div>
                <div>
                  <p>Master in Fashion and Textile</p>
                  <p className="italic">The Royal Danish Academy of Fine Arts</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-8">2015-2018</div>
                <div>
                  <p>Bachelor in Fashion</p>
                  <p className="italic">The Royal Danish Academy of Fine Arts</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-8">2017-2018</div>
                <div>
                  <p>Bachelor in Textile and Fashion</p>
                  <p className="italic">Gerrit Rietveld Academie</p>
                </div>
              </div>

              {/* Additional Schools */}
              <div className="flex">
                <div className="mr-8">2014-2015</div>
                <div>
                  <p>Lunds School of Art and Design</p>
                  <p className="italic">(Art, Design, Architecture)</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-8">2013-2014</div>
                <div>
                  <p>Nordic School of Design</p>
                  <p className="italic">(Fashion)</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-8">2012-2013</div>
                <div>
                  <p>Modefabriken</p>
                  <p className="italic">(Fashion)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="mb-8">
            <h2 className="text-xs font-bold mb-1">Work Experience</h2>
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex">
                <div className="mr-8">2024</div>
                <div>
                  <p>MalmöVÄV, Designer</p>
                  <p className="italic text-xs">
                    Ongoing weave design project on behalf of ArkDes, Malmö Stad (power of places) and Layered.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-8">2023</div>
                <div>
                  <p>Tiger of Sweden, Womens- and menswear designer</p>
                  <p>Tres Bien, Menswear designer</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-8">2021</div>
                <p>Marimekko, Designer Collab with CD Rebekka Bay</p>
              </div>

              <div className="flex">
                <div className="mr-8">2020</div>
                <p>Christobal Balenciaga, Designer Collab</p>
              </div>

              <div className="flex">
                <div className="mr-8">2017</div>
                <p>Margreeth Olsthoorn, Freelance Designer</p>
              </div>

              <div className="flex">
                <div className="mr-8">2014</div>
                <p>Asger Juel Larsen, Design Intern</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Exhibitions and Grants */}
        <div className="mb-8">
          {/* Exhibitions Section */}
          <h2 className="text-xs font-bold mb-1">Exhibitions</h2>
          <div className="mt-4 space-y-2 text-xs">
            <div className="flex">
              <div className="mr-8">2024</div>
              <p>ArkDes, Stockholm, Sweden</p>
            </div>

            <div className="flex">
              <div className="mr-8">2024</div>
              <p>Moderna Museet, residency and group exhibition, Malmö, Sweden</p>
            </div>

            <div className="flex">
              <div className="mr-8">2024</div>
              <p>SSDD, Group exhibition, Malmö, Sweden</p>
            </div>

            <div className="flex">
              <div className="mr-8">2024</div>
              <p>PRE-SSDD for Form Design Center, Group exhibition, Malmö, Sweden</p>
            </div>

            <div className="flex mt-2">
              <div className="mr-8">2023</div>
              <p>Malmöväv, Group exhibition, Malmö, Sweden</p>
            </div>

            <div className="flex mt-2">
              <div className="mr-8">2022</div>
              <p>CPHFW, Group exhibition, Copenhagen, Denmark</p>
            </div>

            <div className="flex mt-2">
              <div className="mr-8">2022</div>
              <p>SKT. Petri, Group exhibition, Copenhagen, Denmark</p>
            </div>

            <div className="flex">
              <div className="mr-8">2022</div>
              <p>Moving gallery, Group exhibition, Copenhagen, Denmark</p>
            </div>

            <div className="flex mt-2">
              <div className="mr-8">2021</div>
              <p>Royal Academy, Group exhibition, Copenhagen, Denmark</p>
            </div>

            <div className="flex mt-2">
              <div className="mr-8">2018</div>
              <p>CPHFW, Group exhibition, Copenhagen, Denmark</p>
            </div>

            <div className="flex">
              <div className="mr-8">2018</div>
              <p>SKT. Petri, Group exhibition, Copenhagen, Denmark</p>
            </div>
          </div>

          {/* Grants and Nominations Section */}
          <div className="mt-8">
            <h2 className="text-xs font-bold mb-2">Grants and Nominations</h2>
            <ul className="list-none space-y-2 text-xs">
              <li>Malmö stad, 2023 -2024</li>
              <li>Finalist "Real Leather" London, England, 2022</li>
              <li>Svenskt Tenn, Estrid Ericsson, 2022</li>
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