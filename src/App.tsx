
function App() {
  return (
    <>
      {/* navbar */}
      <header className="relative z-50">
        <div className="fixed inset-x-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block font-bold text-2xl text-white" href="/">
                UDEXMEDIA
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm md:text-base">
                  <li>
                    <a
                      className="text-white transition hover:text-gray-500/75"
                      href="/"
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-500/75"
                      href="/"
                    >
                      Portofolio
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-500/75"
                      href="/"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-500/75"
                      href="/"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header >

      {/* Hero */}
      <section className="w-full ">
        <div className="relative h-screen">
          <div className="absolute -z-30 bg-[#0365FD] h-[300px] w-full top-0 "></div>
          <img className="absolute w-full top-0" src="https://res.cloudinary.com/devloops7/image/upload/v1700408420/udexmedia/qmfacnrtmvjdbabpdlyr.png" alt="" />
          <img className="absolute -z-20 w-full bottom-0" src="https://res.cloudinary.com/devloops7/image/upload/f_auto,q_auto/v1/udexmedia/bo8itejuczxootaachfk" alt="" />
          <div className="relative">
            <div className=" flex flex-col z-10 h-screen pt-20 items-center text-center text-white mx-auto gap-10 max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl  leading-snug font-bold">We Build Delightful <br /> Digital Experience </h1>
              <p className="text-2xl font-semibold w-1/2 mx-auto">We specialize in desigining interface, web experience and mobile application</p>
              <button className="cursor-pointer w-fit">
                <a href="/" className="rounded-full transition text-base font-semibold  text-blue-700 hover:text-white bg-white hover:bg-blue-500 border-4 border-t-2 px-9 py-4">Contact Me</a>
              </button>
            </div>
            <img className="absolute -bottom-24 inset-x-0 mx-auto hidden lg:block scale-50 xl:scale-75 " src="https://res.cloudinary.com/devloops7/image/upload/v1700408421/udexmedia/a59qpla45yxtx2wpgmxc.svg" alt="" />
          </div>
        </div>
      </section>

      {/* card */}
      <section className="body-font px-4 sm:px-6 lg:px-8 w-full">
        <div className="container py-24 mx-auto" >
          <div className="text-center mt-10">
            <h1 className="text-3xl font-bold text-[#044581]">What We Do</h1>
            <img className="mx-auto py-5" src="https://res.cloudinary.com/devloops7/image/upload/v1700408413/udexmedia/mbgn373pw0fqpffbdsne.svg" alt="" />
            <p className="text-xl w-1/2 mx-auto">Udexmedia was founded to help developers and designers with their projects by offering great quality products.</p>
          </div>
          <div className="flex flex-wrap my-16" >
            <div className="p-4 lg:w-1/4" >
              <div className="h-full bg-gray-100 bg-opacity-75 px-4 py-10 rounded-lg text-center border-2 shadow-xl" >
                <img className="mx-auto pb-6" src="https://res.cloudinary.com/devloops7/image/upload/v1700408413/udexmedia/jdx1iyohu9aqz1v4h94g.svg" alt="" />
                <h1 className="w-3/4 mx-auto text-xl font-normal text-black">UI/UX Design</h1>
              </div>
            </div>
            <div className="p-4 lg:w-1/4" >
              <div className="h-full bg-gray-100 bg-opacity-75 px-4 py-10 rounded-lg text-center border-2 shadow-xl" >
                <img className="mx-auto pb-6" src="https://res.cloudinary.com/devloops7/image/upload/v1700408414/udexmedia/gpbazoiu6h9gfezqlfet.svg" alt="" />
                <h1 className="w-3/4 mx-auto text-xl font-normal text-black">Website Development</h1>
              </div>
            </div>
            <div className="p-4 lg:w-1/4" >
              <div className="h-full bg-gray-100 bg-opacity-75 px-4 py-10 rounded-lg text-center border-2 shadow-xl" >
                <img className="mx-auto pb-6" src="https://res.cloudinary.com/devloops7/image/upload/v1700408421/udexmedia/xnvfahm3e5eumutba0xo.svg" alt="" />
                <h1 className="w-3/4 mx-auto text-xl font-normal text-black">Mobile App Development</h1>
              </div>
            </div>
            <div className="p-4 lg:w-1/4" >
              <div className="h-full bg-gray-100 bg-opacity-75 px-4 py-10 rounded-lg text-center border-2 shadow-xl" >
                <img className="mx-auto pb-6" src="https://res.cloudinary.com/devloops7/image/upload/v1700408419/udexmedia/t5m8ta1xzsz3jq2t4nsk.svg" alt="" />
                <h1 className="w-3/4 mx-auto text-xl font-normal text-black">Mobile Game  Development</h1>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button className="cursor-pointer">
              <a href="/" className="rounded-full transition text-base font-medium hover:text-blue-700 text-white hover:bg-white bg-blue-500 border-4 border-t-2 px-6 py-3">See Our Capabilities</a>
            </button>
          </div>
        </div>
      </section>

      {/* products */}
      <section className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#044581]">Our Products</h1>
          <img className="mx-auto py-5" src="https://res.cloudinary.com/devloops7/image/upload/v1700408413/udexmedia/mbgn373pw0fqpffbdsne.svg" alt="" />
        </div>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-2 gap-5">
            <div className="">
              <h1 className="text-2xl font-bold">All The Great <p className="bg-gradient-to-b from-[#93DF93] to-[#21C2C1] inline-block text-transparent bg-clip-text">RealmChat</p> Features</h1>
              <p className="text-lg py-6">RealmChat is a WhatsApp tool that is used to manage and also respond to users faster.</p>
              <div className="flex flex-col gap-5">
                <span className="py-4 px-5 bg-gradient-to-b from-[#93DF9333] to-[#21C2C133] rounded-xl font-semibold">Marketing Tools</span>
                <span className="py-4 px-5 bg-gradient-to-b from-[#93DF9333] to-[#21C2C133] rounded-xl font-semibold">WhatsApp Shop (Catalogue)</span>
                <span className="py-4 px-5 bg-gradient-to-b from-[#93DF9333] to-[#21C2C133] rounded-xl font-semibold">Platform Integration</span>
                <span className="py-4 px-5 bg-gradient-to-b from-[#93DF9333] to-[#21C2C133] rounded-xl font-semibold">Team Inbox</span>
              </div>
            </div>
            <div className="p-10">
              <img src="https://res.cloudinary.com/devloops7/image/upload/v1700408421/udexmedia/rix0gg7qa28wm5jth194.png" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="p-10">
              <img src="https://res.cloudinary.com/devloops7/image/upload/v1700408422/udexmedia/nf63e2ggnolgfwrwjb65.png" alt="" />
            </div>
            <div className="text-center px-20 my-auto">
              <h1 className="text-2xl font-semibold text-[#B78642]">Larvify</h1>
              <p className="text-normal mt-4">RealmChat is a WhatsApp tool that is used to manage and also respond to users faster.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="text-center px-20 my-auto">
              <h1 className="text-2xl font-semibold bg-gradient-to-b from-[#93DF93] to-[#21C2C1] inline-block text-transparent bg-clip-text">Wsup.me</h1>
              <p className="text-normal mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, aperiam, non, eius laboriosam quasi quaerat perspiciatis sit aspernatur dolorum assumenda neque porro nobis aliquid molestias sed quos cumque veritatis dolore.</p>
            </div>
            <div className="p-10">
              <img src="https://res.cloudinary.com/devloops7/image/upload/v1700408422/udexmedia/nf63e2ggnolgfwrwjb65.png" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="p-10">
              <img src="https://res.cloudinary.com/devloops7/image/upload/v1700408422/udexmedia/nf63e2ggnolgfwrwjb65.png" alt="" />
            </div>
            <div className="text-center px-20 my-auto">
              <h1 className="text-2xl font-semibold bg-gradient-to-b from-[#93DF93] to-[#21C2C1] inline-block text-transparent bg-clip-text">JomViral</h1>
              <p className="text-normal mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, aperiam, non, eius laboriosam quasi quaerat perspiciatis sit aspernatur dolorum assumenda neque porro nobis aliquid molestias sed quos cumque veritatis dolore.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="text-center px-20 my-auto">
              <h1 className="text-2xl font-semibold bg-gradient-to-b from-[#93DF93] to-[#21C2C1] inline-block text-transparent bg-clip-text">MyKedaii</h1>
              <p className="text-normal mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, aperiam, non, eius laboriosam quasi quaerat perspiciatis sit aspernatur dolorum assumenda neque porro nobis aliquid molestias sed quos cumque veritatis dolore.</p>
            </div>
            <div className="p-10">
              <img src="https://res.cloudinary.com/devloops7/image/upload/v1700408422/udexmedia/nf63e2ggnolgfwrwjb65.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* latest Work */}
      <section className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mt-10">
          <h1 className="text-3xl font-bold text-[#044581]">Our Latest Work</h1>
          <img className="mx-auto py-5" src="https://res.cloudinary.com/devloops7/image/upload/v1700408413/udexmedia/mbgn373pw0fqpffbdsne.svg" alt="" />
        </div>
        <div className="grid grid-cols-2 mt-10 w-5/6 mx-auto ">
          <div className=" w-5/6 pt-32 flex flex-col gap-20">
            <div className="rounded-3xl bg-[#FFEFCE] w-full mx-auto h-72 ">
              <div className="flex flex-col p-5 justify-end h-full">
                <div className="w-96 mx-auto "><img src="https://res.cloudinary.com/devloops7/image/upload/v1700408416/udexmedia/qfffee1iij0ywabho5tw.png" alt="" /></div>
                <h1 className="text-2xl mt-5 font-semibold">E-Commerce Website</h1>
                <p className="text-gray-600 text-sm">WAWACOSMETIC</p>
              </div>

            </div>
            <div className="rounded-3xl bg-[#E1E6FB] w-full mx-auto h-72 ">
              <div className="flex flex-col p-5 justify-end h-full">
                <div className="w-96 mx-auto "><img src="https://res.cloudinary.com/devloops7/image/upload/v1700408416/udexmedia/vqmr0p2anxoebv6xwebr.png" alt="" /></div>
                <h1 className="text-2xl mt-5 font-semibold">E-Commerce Website</h1>
                <p className="text-gray-600 text-sm">BOUGAS MEN & WOMEN</p>
              </div>

            </div>
          </div>
          <div className="w-5/6">
            <div className="flex flex-col gap-20">
              <div className="rounded-3xl bg-[#FFE5E5] w-full mx-auto h-72 ">
                <div className="flex flex-col p-5 justify-end h-full">
                  <div className="w-96 mx-auto "><img src="https://res.cloudinary.com/devloops7/image/upload/v1700408418/udexmedia/zqlygdby7vviazwwpjya.png" alt="" /></div>
                  <h1 className="text-2xl mt-5 font-semibold">Point Of Sale</h1>
                  <p className="text-gray-600 text-sm">HIJAB ISTA HUB</p>
                </div>

              </div>
              <div className="rounded-3xl bg-[#F9F1EE] w-full mx-auto h-72 ">
                <div className="flex flex-col p-5 justify-end h-full">
                  <div className="w-96 mx-auto "><img src="https://res.cloudinary.com/devloops7/image/upload/v1700408419/udexmedia/lysdbl99fq2gpbbd54ah.png" alt="" /></div>
                  <h1 className="text-2xl mt-5 font-semibold">E-Commerce Website</h1>
                  <p className="text-gray-600 text-sm">UZMA REPUBLIC</p>
                </div>

              </div>

            </div>
            <div className="pt-10">
              <h1 className="text-2xl font-semibold">Want to see another project?</h1>
              <a href="/" className="text-lg text-blue-500 underline underline-offset-8 ">SEE MORE ➜</a>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen On */}
      <section className="container px-4 sm:px-6 lg:px-8 mx-auto py-10">
        <div className="text-center mt-10">
          <h1 className="text-3xl font-bold text-[#044581]">As Seen On</h1>
          <img className="mx-auto py-5" src="https://res.cloudinary.com/devloops7/image/upload/v1700408413/udexmedia/mbgn373pw0fqpffbdsne.svg" alt="" />
        </div>
        <div className="flex flex-wrap md:flex-col lg:flex-row max-w-3xl mx-auto justify-center items-center gap-2 ">
          <div className="w-fit">
            <img className="h-32 p-5" src="https://res.cloudinary.com/devloops7/image/upload/v1700408414/udexmedia/amu3f0trgxrzt9mcvh8s.png" alt="" />
          </div>
          <div className="w-fit">
            <img className="h-32 p-5" src="https://res.cloudinary.com/devloops7/image/upload/v1700408420/udexmedia/tycvzd8d7yscjlekc5up.png" alt="" />
          </div>
          <div className="w-fit">
            <img className="h-32 p-5" src="https://res.cloudinary.com/devloops7/image/upload/v1700408420/udexmedia/ong8ayaimlqmfgx0fbfs.png" alt="" />
          </div>
          <div className="w-fit">
            <img className="h-32 p-5 py-10" src="https://res.cloudinary.com/devloops7/image/upload/v1700408419/udexmedia/l08u7dpnhihwqwyut8kn.png" alt="" />
          </div>
        </div>
      </section>

      {/* feedback */}
      <section className="container px-4 sm:px-6 lg:px-10 py-5 my-7 mx-auto w-3/4 bg-slate-200 rounded-3xl">
        <div className="text-center rounded-3xl px-8 py-6 border bg-white">
          <h1 className="text-3xl font-bold text-[#044581]">What Sets Us Apart <p className="text-blue-500 inline">?</p></h1>
          <img className="mx-auto py-5" src="https://res.cloudinary.com/devloops7/image/upload/v1700408413/udexmedia/mbgn373pw0fqpffbdsne.svg" alt="" />
          <div className="flex mb-8">
            <p className="inline text-blue-500 text-2xl italic font-bold mr-3">"</p>
            <h1 className="text-2xl font-normal text-justify">
              Focus on creating and growing your projects and websites, and we'll always take care of spinning up new designs for your users and making sure they look great"
            </h1>
          </div>
          <div className="flex gap-4 items-center ">
            <div className="rounded-full w-10 h-10 bg-slate-700"></div>
            <div className="text-start text-sm ">
              <h1 className="font-bold text-lg ">Aura Asia Global Sdn Bhd</h1>
              <p>CEO</p>
            </div>
          </div>
        </div>
      </section >

      {/* contact me */}
      <section>
        <div className="relative h-full ">
          <img className="bg-[#0669FD]" src="https://res.cloudinary.com/devloops7/image/upload/v1700408417/udexmedia/faxnwgwsxmxrbsqsdbqs.svg" alt="" />
          <img className="absolute top-10 overflow-hidden" src="https://res.cloudinary.com/devloops7/image/upload/v1700408420/udexmedia/qmfacnrtmvjdbabpdlyr.png" alt="" />
        </div>
        <div className="bg-gradient-to-b from-[#0669FD] to-[#59CEFB] ">
          <div className="grid grid-cols-2 pt-10 container px-4 sm:px-6 lg:px-8 mx-auto" >
            <div className="flex flex-col items-start gap-7 text-white">
              <div className="mt-4">
                <h1 className="text-3xl font-semibold">Let's Collaborate !</h1>
                <div className="border-2 w-28 mt-2 border-white rounded"></div>
              </div>
              <p>Tell us anything you need and we are ready to create special package for your business need! Free consultation. </p>
              <img className="scale-75" src="https://res.cloudinary.com/devloops7/image/upload/v1700408415/udexmedia/hrpyepa4rto7p0f1xwgm.svg" alt="" />
            </div>
            <div className="z-20">
              <form className="flex flex-col gap-4" action="">
                <input className="px-10 py-4 w-full rounded-full" type="text" name="" id="" placeholder="Name*" />
                <input className="px-10 py-4 w-full rounded-full" type="text" name="" id="" placeholder="Email*" />
                <input className="px-10 py-4 w-full rounded-full" type="text" name="" id="" placeholder="Subject*" />
                <textarea className="px-10 py-4 h-32 w-full rounded-3xl" name="message" id="" placeholder="Message*"></textarea>
                <button className="cursor-pointer mt-10">
                  <a href="/" className="rounded-full transition text-base font-medium text-blue-700 hover:text-white bg-white hover:bg-blue-500 border-4 border-t-2 px-6 py-3">Send Your Message</a>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" container px-4 sm:px-6 lg:px-8 mx-auto py-10 ">
        <div className="flex justify-between items-end ">
          <div className="flex flex-col justify-items-end">
            <p>Lets Build Your Amazing Product</p>
            <div className="mt-4">
              <h1 className="text-4xl">Collaborate With Us</h1>
              <div className="border-2 w-28 mt-2 border-black rounded"></div>
            </div>
          </div>
          <div className="flex gap-6">
            <a href=""><img src="https://res.cloudinary.com/devloops7/image/upload/v1700408419/udexmedia/emvxm6hedutg2kcrh8zp.svg" alt="" /></a>
            <a href=""><img src="https://res.cloudinary.com/devloops7/image/upload/v1700408414/udexmedia/xpgq6jlezsr7fwrbnl4c.svg" alt="" /></a>
            <a href=""><img src="https://res.cloudinary.com/devloops7/image/upload/v1700408417/udexmedia/ivwgmhyjsshbeskongut.svg" alt="" /></a>
            <a href=""><img src="https://res.cloudinary.com/devloops7/image/upload/v1700408423/udexmedia/gsfaox97t1zlxwbec6hn.svg" alt="" /></a>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="flex gap-3">
            <p>+6013-993 2680</p>
            <p>+62 878-4422-4204</p>
            <p>hello@udexmedia.com</p>
          </div>
          <div>
            <p>© 2021 UDEX MEDIA | ALL RIGHT RESERVED</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
