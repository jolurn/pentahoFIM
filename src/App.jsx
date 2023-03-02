import { useState } from "react";
import {
  RiHome5Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings3Line,
  RiLogoutBoxRLine,
  RiTruckLine,
} from "react-icons/ri";

import Logo from './img/logo.png'
function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };
  const toggleOrder = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <div
        className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        <div>
          <ul className="pl-4">
            <li>
              <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
                pfim
              </h1>
            </li>
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
            >
              <RiHome5Line className="text-xl" />
            </a>
          </li>
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors ">
              <a
                href="#"
                className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
              >
                <RiPercentLine className="text-xl" />
              </a>
            </li>
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <a
                href="#"
                className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
              >
                <RiPieChartLine className="text-xl" />
              </a>
            </li>
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <a
                href="#"
                className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
              >
                <RiMailLine className="text-xl" />
              </a>
            </li>
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <a
                href="#"
                className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
              >
                <RiNotification3Line className="text-xl" />
              </a>
            </li>
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <a
                href="#"
                className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
              >
                <RiSettings3Line className="text-xl" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pl-4">
            <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <a
                href="#"
                className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
              >
                <RiLogoutBoxRLine className="text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/**Main */}
      <main className="lg:pl-32 lg:pr-96 md:pl-32 md:pr-96 pb-20 w-[45cm] bg-[#262837]">
        <div className=" md:p-8 p-4">
          <h1 className="text-gray-300 uppercase">reportes de notas y financiero</h1>
          <hr />
        </div>
        <div className="md:p-8 p-4">
          <label
            for="countries"
            className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
          >
            Selección de Alumno
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        {/** Boletas */}

        <div className="flex flex-row overflow-auto ">
          {/**Reporte de Notas */}
          <div className="md:ml-8 bg-white rounded-lg relative w-[21cm] h-[20.7cm] my-0 mx-auto text-[#001028] font-sans text-xs p-[20px]">
            <header className="before:table before:clear-both py-2.5 px-0 mb-[30px]">
              <div id="logo" className="flex justify-center mb-[30px]">
                <img src={Logo} className="w-[90px] "/>
              </div>
              <h1 className="border-b-[1px] border-t-[1px] border-solid border-[#5D6975] text-[2.4em] leading-[1.4em] font-normal text-center my-[0px] mr-[0px] bg-[url('./img/dimension.png')]">PROMEDIOS</h1>
              <div className="before:table before:clear-both float-right text-right mt-[20px]">
                <div className="whitespace-nowrap">Company Name</div>
                <div className="whitespace-nowrap">
                  455 Foggy Heights,
                  <br /> AZ 85004, US
                </div>
                <div className="whitespace-nowrap">(602) 519-0450</div>
                <div className="whitespace-nowrap">
                  <a className="text-[#5D6975] underline" href="mailto:company@example.com">company@example.com</a>
                </div>
              </div>
              <div className="mt-[20px]">
                <div className="whitespace-nowrap">
                  <span className="text-[#5D6975] text-right w-[52px] mr-[10px] inline-block text-xs">PROJECT</span> Website development
                </div>
                <div className="whitespace-nowrap">
                  <span className="text-[#5D6975] text-right w-[52px] mr-[10px] inline-block text-xs">CLIENT</span> John Doe
                </div>
                <div className="whitespace-nowrap">
                  <span className="text-[#5D6975] text-right w-[52px] mr-[10px] inline-block text-xs">ADDRESS</span> 796 Silver Harbour, TX 79273, US
                </div>
                <div className="whitespace-nowrap">
                  <span className="text-[#5D6975] text-right w-[52px] mr-[10px] inline-block text-xs">EMAIL</span>{" "}
                  <a className="text-[#5D6975] underline" href="mailto:john@example.com">john@example.com</a>
                </div>
                <div className="whitespace-nowrap">
                  <span className="text-[#5D6975] text-right w-[52px] mr-[10px] inline-block text-xs">DATE</span> August 17, 2015
                </div>
                <div className="whitespace-nowrap">
                  <span className="text-[#5D6975] text-right w-[52px] mr-[10px] inline-block text-xs">DUE DATE</span> September 17, 2015
                </div>
              </div>
            </header>
            <main>
              <table className="w-full border-collapse border-spacing-0 mb-[20px]">
                <thead>
                  <tr className="">
                    <th id="service" className="align-top text-left py-[5px] px-[20px] text-[#5D6975] border-b-[1px] border-b-solid border-b-[#C1CED9] whitespace-nowrapfont font-normal">SERVICE</th>
                    <th id="desc" className="text-center py-[5px] px-[20px] text-[#5D6975] border-b-[1px] border-b-solid border-b-[#C1CED9] whitespace-nowrapfont font-normal">DESCRIPTION</th>
                    <th className="text-center py-[5px] px-[20px] text-[#5D6975] border-b-[1px] border-b-solid border-b-[#C1CED9] whitespace-nowrapfont font-normal">PRICE</th>
                    <th className="text-left py-[5px] px-[20px] text-[#5D6975] border-b-[1px] border-b-solid border-b-[#C1CED9] whitespace-nowrapfont font-normal">QTY</th>
                    <th className="text-left py-[5px] px-[20px] text-[#5D6975] border-b-[1px] border-b-solid border-b-[#C1CED9] whitespace-nowrapfont font-normal">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="service" className="align-top text-left">Design</td>
                    <td id="desc" className="text-left">
                      Creating a recognizable design solution based on the
                      company's existing visual identity
                    </td>
                    <td id="unit" className="text-left text-[1.2em]">$40.00</td>
                    <td id="qty" className="text-left text-[1.2em]">26</td>
                    <td id="total" className="text-left text-[1.2em]">$1,040.00</td>
                  </tr>
                  <tr>
                    <td id="service" className="align-top text-left">Development</td>
                    <td id="desc" className="text-left">
                      Developing a Content Management System-based Website
                    </td>
                    <td id="unit" className="text-left text-[1.2em]">$40.00</td>
                    <td id="qty" className="text-left text-[1.2em]">80</td>
                    <td id="total" className="text-left text-[1.2em]">$3,200.00</td>
                  </tr>
                  <tr>
                    <td id="service" className="align-top text-left">SEO</td>
                    <td id="desc" className="text-left">
                      Optimize the site for search engines (SEO)
                    </td>
                    <td id="unit" className="text-left text-[1.2em]">$40.00</td>
                    <td id="qty" className="text-left text-[1.2em]">20</td>
                    <td id="total" className="text-left text-[1.2em]">$800.00</td>
                  </tr>
                  <tr>
                    <td id="service" className="align-top text-left">Training</td>
                    <td id="desc" className="text-left">
                      Initial training sessions for staff responsible for
                      uploading web content
                    </td>
                    <td id="unit" className="text-left text-[1.2em]">$40.00</td>
                    <td id="qty" className="text-left text-[1.2em]">4</td>
                    <td id="total" className="text-left text-[1.2em]">$160.00</td>
                  </tr>
                  <tr>
                    <td colspan="4" className="text-left">SUBTOTAL</td>
                    <td id="total" className="text-left">$5,200.00</td>
                  </tr>
                  <tr>
                    <td colspan="4" className="text-left">TAX 25%</td>
                    <td id="total" className="text-left">$1,300.00</td>
                  </tr>
                  <tr>
                    <td colspan="4" id="grand total" className="text-left">
                      GRAND TOTAL
                    </td>
                    <td id="grand total" className="text-left">$6,500.00</td>
                  </tr>
                </tbody>
              </table>
              <div >
                <div>NOTICE:</div>
                <div className="text-[#5D6975] text-[1.2em]">
                  A finance charge of 1.5% will be made on unpaid balances after
                  30 days.
                </div>
              </div>
            </main>
            <footer className="text-[#5D6975] w-full h-[30px] b-[0px] border-t-[1px] border-t-solid border-t-[#C1CED9] py-[8px] px-[0px] text-center">
              Invoice was created on a computer and is valid without the
              signature and seal.
            </footer>
          </div>
          {/**Reporte de Pagos */}
          <div className="md:ml-8 bg-white rounded-lg relative w-[21cm] h-[20.7cm] my-0 mx-auto text-[#001028] font-sans text-xs p-[20px]">
            <header className="before:table before:clear-both py-2.5 px-0 mb-[30px]">
              <div id="logo" className="flex justify-center mb-[30px]">
                <img src={Logo} className="w-[90px] "/>
              </div>
              <h1 className="border-b-[1px] border-t-[1px] border-solid border-[#5D6975] text-[2.4em] leading-[1.4em] font-normal text-center my-[0px] mr-[0px] bg-[url('./img/dimension.png')]">REPORTE FINANCIERO</h1>
              <div className="before:table before:clear-both float-right text-right mt-[20px]">
                <div className="whitespace-nowrap">Company Name</div>
                <div className="whitespace-nowrap">
                  455 Foggy Heights,
                  <br /> AZ 85004, US
                </div>
                <div className="whitespace-nowrap">(602) 519-0450</div>
                <div className="whitespace-nowrap">
                  <a className="text-[#5D6975] underline" href="mailto:company@example.com">company@example.com</a>
                </div>
              </div>
              <div className="mt-[20px]">
                <div className="whitespace-nowrap">
                  <span className="text-[#5D6975] text-right w-[52px] mr-[10px] inline-block text-xs">PROJECT</span> Website development
                </div>
                <div className="whitespace-nowrap">
                  <span className="text-[#5D6975] text-right w-[52px] mr-[10px] inline-block text-xs">CLIENT</span> John Doe
                </div>
                <div className="whitespace-nowrap">
                  <span className="text-[#5D6975] text-right w-[52px] mr-[10px] inline-block text-xs">ADDRESS</span> 796 Silver Harbour, TX 79273, US
                </div>
                <div className="whitespace-nowrap">
                  <span className="text-[#5D6975] text-right w-[52px] mr-[10px] inline-block text-xs">EMAIL</span>{" "}
                  <a className="text-[#5D6975] underline" href="mailto:john@example.com">john@example.com</a>
                </div>
                <div className="whitespace-nowrap">
                  <span className="text-[#5D6975] text-right w-[52px] mr-[10px] inline-block text-xs">DATE</span> August 17, 2015
                </div>
                <div className="whitespace-nowrap">
                  <span className="text-[#5D6975] text-right w-[52px] mr-[10px] inline-block text-xs">DUE DATE</span> September 17, 2015
                </div>
              </div>
            </header>
            <main>
              <table className="w-full border-collapse border-spacing-0 mb-[20px]">
                <thead>
                  <tr className="">
                    <th id="service" className="align-top text-left py-[5px] px-[20px] text-[#5D6975] border-b-[1px] border-b-solid border-b-[#C1CED9] whitespace-nowrapfont font-normal">SERVICE</th>
                    <th id="desc" className="text-center py-[5px] px-[20px] text-[#5D6975] border-b-[1px] border-b-solid border-b-[#C1CED9] whitespace-nowrapfont font-normal">DESCRIPTION</th>
                    <th className="text-center py-[5px] px-[20px] text-[#5D6975] border-b-[1px] border-b-solid border-b-[#C1CED9] whitespace-nowrapfont font-normal">PRICE</th>
                    <th className="text-left py-[5px] px-[20px] text-[#5D6975] border-b-[1px] border-b-solid border-b-[#C1CED9] whitespace-nowrapfont font-normal">QTY</th>
                    <th className="text-left py-[5px] px-[20px] text-[#5D6975] border-b-[1px] border-b-solid border-b-[#C1CED9] whitespace-nowrapfont font-normal">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="service" className="align-top text-left">Design</td>
                    <td id="desc" className="text-left">
                      Creating a recognizable design solution based on the
                      company's existing visual identity
                    </td>
                    <td id="unit" className="text-left text-[1.2em]">$40.00</td>
                    <td id="qty" className="text-left text-[1.2em]">26</td>
                    <td id="total" className="text-left text-[1.2em]">$1,040.00</td>
                  </tr>
                  <tr>
                    <td id="service" className="align-top text-left">Development</td>
                    <td id="desc" className="text-left">
                      Developing a Content Management System-based Website
                    </td>
                    <td id="unit" className="text-left text-[1.2em]">$40.00</td>
                    <td id="qty" className="text-left text-[1.2em]">80</td>
                    <td id="total" className="text-left text-[1.2em]">$3,200.00</td>
                  </tr>
                  <tr>
                    <td id="service" className="align-top text-left">SEO</td>
                    <td id="desc" className="text-left">
                      Optimize the site for search engines (SEO)
                    </td>
                    <td id="unit" className="text-left text-[1.2em]">$40.00</td>
                    <td id="qty" className="text-left text-[1.2em]">20</td>
                    <td id="total" className="text-left text-[1.2em]">$800.00</td>
                  </tr>
                  <tr>
                    <td id="service" className="align-top text-left">Training</td>
                    <td id="desc" className="text-left">
                      Initial training sessions for staff responsible for
                      uploading web content
                    </td>
                    <td id="unit" className="text-left text-[1.2em]">$40.00</td>
                    <td id="qty" className="text-left text-[1.2em]">4</td>
                    <td id="total" className="text-left text-[1.2em]">$160.00</td>
                  </tr>
                  <tr>
                    <td colspan="4" className="text-left">SUBTOTAL</td>
                    <td id="total" className="text-left">$5,200.00</td>
                  </tr>
                  <tr>
                    <td colspan="4" className="text-left">TAX 25%</td>
                    <td id="total" className="text-left">$1,300.00</td>
                  </tr>
                  <tr>
                    <td colspan="4" id="grand total" className="text-left">
                      GRAND TOTAL
                    </td>
                    <td id="grand total" className="text-left">$6,500.00</td>
                  </tr>
                </tbody>
              </table>
              <div >
                <div>NOTICE:</div>
                <div className="text-[#5D6975] text-[1.2em]">
                  A finance charge of 1.5% will be made on unpaid balances after
                  30 days.
                </div>
              </div>
            </main>
            <footer className="text-[#5D6975] w-full h-[30px] b-[0px] border-t-[1px] border-t-solid border-t-[#C1CED9] py-[8px] px-[0px] text-center">
              Invoice was created on a computer and is valid without the
              signature and seal.
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
