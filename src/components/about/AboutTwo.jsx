import React from 'react'

const AboutTwo = (props) => {
  return (
    <section className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
      {props.title ? (
        <div className='md:text-center text-start pb-24 px-2 flex flex-col items-center justify-center'>
          <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
          <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
        </div>
      ) : ''}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 ">

          <div className={`relative lg:mb-12 group py-12 ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">

            <div className="pl-12 pr-6">
              <img className="relative" src="/images/about/about-02.jpg" alt="" />
            </div>
            <div className="absolute left-20 pr-12 bottom-24 lg:bottom-5 xl:bottom-5 group-hover:bottom-4 lg:group-hover:-bottom-4 bg-red-600 duration-500">
              <div className="max-w-xs rounded-lg sm:max-w-md xl:max-w-md backdrop-blur-sm">
                <div className="px-3 py-4 sm:px-5 sm:py-8">
                  <div className="flex items-start flex-col sm:flex-row">
                    <p className="text-3xl sm:text-4xl hidden sm:block">👋</p>
                    <blockquote className="ml-5">
                      <p className="text-sm font-medium text-white sm:text-lg">“Lorem ipsum dolor sit amet conse adipisicing elit. Et, dicta blanditiis enim.”</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`2xl:pl-16 ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Making Complexity Effortless</h2>
            <p className="text-xl leading-relaxed text-gray-900 mt-9">Lorem ipsum dolor sit amet conse adipisicing elit. Et, dicta blanditiis enim.</p>
            <p className="mt-6 text-xl leading-relaxed text-gray-900">Velit officia conse duis enim velit mollit. Exercit ation veniam consequat sunt nostrud amet.</p>
          </div>

        </div>
      </div>
    </section>

  )
}

export default AboutTwo