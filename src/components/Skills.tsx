import React from "react"

const Skills = () =>{
    return(
       <div id="skills" className="container pt-32" >
        <div className="grid md:grid-cols-2 gap-20 items-center">
            <div  data-aos="zoom-in">
                <h2 className="text-4xl md:text-5xl">Technologies I Work With </h2>
                <p className="text-gray-300 pt-2">I have a solid foundation in web devlopment, specializing in html , css,
                    and javascript , my exprience extends to using framework like React and Next.js to create dynamic and user-friendfly
                    application in Tilwind CSS for efficient styling and design. with a passion for learning , I stay update on the latest technology to enhance my skill set and contribute effectively to project 
                     </p>
            </div>
            <div >
                <div className="grid grid-cols-2 text-pink-500  text-3xl sm:text4xl ">
                  <div className="space-y-2 ">
                    <h2  data-aos="zoom-in">TYPESCRIPT</h2>
                    <h2  data-aos="zoom-in">Next.js</h2>
                    <h2  data-aos="zoom-in">JAVASCRIPT</h2>
    
                  </div>
                  <br />
                  <div className="space-y-2 ">
                    <h2  data-aos="zoom-in">HTML</h2>
                    <h2  data-aos="zoom-in">CSS</h2>
                    <h2  data-aos="zoom-in">Tailwind</h2>
                    
     
                  
                </div>
                </div>
                
                  
            </div>
        </div>
       </div>

    )
    
}
export default Skills