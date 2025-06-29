const filesHolder = {}
import cs50x from './CS50x.pdf'
import cs50w from './CS50W.pdf'
import cs50ai from './CS50AI.pdf'

filesHolder["Tom's Resume"] = ['html', `<div class="resumeContainer" style="font-family: Arial, sans-serif; width: 100%; height: auto; margin: 0 auto; padding: 30px; background-color: #ffffff; color: #1a1a1a; line-height: 1.6; outline: none; border: none;">
  <p style="font-size: 2em; font-weight: bold; margin-bottom: 0;">Thomas Harrison</p>
  <p style="font-size: 1.2em; color: #555; margin-top: 5px; margin-bottom: 20px;">Software Developer</p>

  <div style="text-align: right; font-size: 0.95em; color: #444; margin-bottom: 20px;">
    <p>+32 480 65 37 74</p>
    <p>Thomasjh@gmail.com</p>
    <p>Geetbets, Belgium</p>
    <p><img src="./assets/github.png">@maltsandcino</p>
  </div>

  <p style="font-weight: bold; font-size: 1.2em; margin: 30px 0 10px; text-transform: uppercase; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Skills & Abilities</p>
  <ul style="margin: 0 0 10px 20px; padding: 0;">
    <li>Python for command-line tool development</li>
    <li>Back-end web-development with Django, including the Django ORM</li>
    <li>Front-end design with JavaScript/CSS/HTML</li>
    <li>Data manipulation and algorithm design</li>
    <li>CLI, GIT, VSCode and other IDEs</li>
    <li>SOAP and REST API integrations</li>
  </ul>

  <p style="font-weight: bold; font-size: 1.2em; margin: 30px 0 10px; text-transform: uppercase; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Recent Projects</p>

  <p><strong>Climapulse Service SAAS</strong> <br> Python (Django), JavaScript (React)</p>
  <p>Maintenance and feature development of a large SAAS service designed to facilitate maintenance, service, and audits of HVAC systems…</p>

  <p><strong>API Microservice</strong> <br> Python (FASTapi)</p>
  <p>A microservice designed to facilitate API communication between two SAAS systems...</p>

  <p><strong>Veterinary Booking and Management System</strong> <br> Python (Django), JavaScript, SQLite</p>
  <p>A web application designed for multi-vet clinic staff to automate appointment booking and data management...</p>

  <p><strong>Sentiment Analysis API</strong> <br> Python (NLTK), JavaScript</p>
  <p>A web tool for analyzing sentiment, including sarcasm detection using VADER and a custom-trained neural net.</p>

  <p><strong>Assembler</strong> <br> Python, Assembly, Machine Language</p>
  <p>A command-line tool to parse and convert human-readable assembly into 16-bit machine language.</p>

  <p style="font-weight: bold; font-size: 1.2em; margin: 30px 0 10px; text-transform: uppercase; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Education</p>

  <p><strong>CS50 Series</strong> <br> Harvard Extension School <span style="float: right; color: #777;">Spring 2023 – Spring 2024</span></p>
  <p>Courses in programming, web development, and AI with a project-driven approach...</p>

  <p><strong>BS Computer Science (Prospective)</strong> <br> IU International University, Germany <span style="float: right; color: #777;">2022 – Present</span></p>
  <p>Study in computer architecture, Java, data structures, algorithms, and SQL...</p>

  <p><strong>Master of Science in Education</strong> <br> Niagara University, NY, USA <span style="float: right; color: #777;">Sept. 2011 – Dec. 2012</span></p>
  <p>Focus on data-driven language instruction, pedagogy, and long-term practicums.</p>

  <p style="font-weight: bold; font-size: 1.2em; margin: 30px 0 10px; text-transform: uppercase; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Employment</p>

  <p><strong>Software Developer</strong> <br> Climapulse, Hasselt <span style="float: right; color: #777;">Jan. 2025 – Present</span></p>
  <p>Maintaining and developing large SAAS infrastructure for HVAC compliance and inter-system communication.</p>

  <p><strong>Mail Courier</strong> <br> B-Post, Hasselt <span style="float: right; color: #777;">Oct. 2022 – Dec. 2024</span></p>
  <p>Mail and parcel delivery, customer service, and operational problem-solving.</p>

  <p><strong>Public School Teacher</strong> <br> Grand Erie District School Board, Ontario, Canada <span style="float: right; color: #777;">Sept. 2015 – Aug. 2022</span></p>
  <p>Developed curriculum and used educational software for tech-integrated language instruction.</p>
</div>
`]

filesHolder["Harvard CS50X Certificate"] = ["pdf", cs50x]
filesHolder["Harvard CS50Web Certificate"] = ["pdf", cs50w]
filesHolder["Harvard CS50AI Certificate"] = ["pdf", cs50ai]
export default filesHolder