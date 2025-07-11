import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { 
  Mail, 
  Linkedin, 
  Moon, 
  Sun, 
  MapPin, 
  Calendar,
  ExternalLink,
  Download,
  User,
  Briefcase,
  Code,
  Award,
  MessageSquare
} from 'lucide-react';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('vincentleemarvin@gmail.com');
    // You could add a toast notification here
  };

  const openMailto = () => {
    window.open('mailto:vincentleemarvin@gmail.com', '_blank');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 transition-all duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              Vincent Lee Marvin
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/80 hover:text-white transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('timeline')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Contact
              </button>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4 text-yellow-400" />
                <Switch 
                  checked={isDarkMode} 
                  onCheckedChange={toggleTheme}
                  className="data-[state=checked]:bg-purple-600"
                />
                <Moon className="h-4 w-4 text-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                Vincent Lee 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Marvin
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/80 font-light">
                Senior QA Automation Engineer
              </p>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Building robust test automation solutions with 4+ years of experience across multiple domains
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Let's Talk
                <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Learn More
                <User className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">About Me</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                I'm a QA Automation Engineer with over 4 years of experience in both manual and automated testing across multiple domains. 
                I specialize in Java, Playwright, Katalon, Postman, and Excel VBA. I'm known for being adaptable, a fast learner, 
                and someone who can bridge technical and business needs.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                I enjoy breaking complex tasks into small actionable items, and I'm always curious to learn more—whether it's 
                exploring new tools, watching educational YouTube videos, or reading books.
              </p>
              <div className="flex items-center space-x-2 text-purple-400">
                <Award className="h-5 w-5" />
                <span className="text-lg font-semibold">Motto: "Never ending learning."</span>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Core Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80">Adaptable & Fast Learner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80">Technical & Business Bridge</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80">Complex Task Decomposition</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80">Continuous Learning Mindset</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Tools</h2>
            <p className="text-lg text-white/60">Technologies I work with</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Code className="mr-2 h-5 w-5 text-purple-400" />
                  Programming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30">Java</Badge>
                  <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30">JavaScript</Badge>
                  <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30">Excel VBA</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Award className="mr-2 h-5 w-5 text-pink-400" />
                  Testing Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-pink-600/20 text-pink-300 border-pink-600/30">Playwright</Badge>
                  <Badge className="bg-pink-600/20 text-pink-300 border-pink-600/30">Katalon</Badge>
                  <Badge className="bg-pink-600/20 text-pink-300 border-pink-600/30">Cucumber</Badge>
                  <Badge className="bg-pink-600/20 text-pink-300 border-pink-600/30">Postman</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-blue-400" />
                  Tools & Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">Git</Badge>
                  <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">Jira</Badge>
                  <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">BrowserStack</Badge>
                  <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">Bitbucket</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-white/60">Key project highlights from my experience</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Manulife D2C Automation</CardTitle>
                <p className="text-purple-400 font-semibold">QualityKiosk</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Built end-to-end automation for policy data update flows. Managed 150+ test cases within 2 weeks 
                  in a small team, significantly improving regression testing efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-600/20 text-green-300 border-green-600/30">Java</Badge>
                  <Badge className="bg-green-600/20 text-green-300 border-green-600/30">Playwright</Badge>
                  <Badge className="bg-green-600/20 text-green-300 border-green-600/30">Cucumber</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">BRILife MyAccess & Digiform</CardTitle>
                <p className="text-purple-400 font-semibold">QualityKiosk</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Designed mobile test automation framework for insurance applications, handling location permissions, 
                  notifications, and full regression cycles. Work was presented to the client.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">Katalon</Badge>
                  <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">BrowserStack</Badge>
                  <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">Mobile Testing</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Jira Aging Macro Tool</CardTitle>
                <p className="text-purple-400 font-semibold">QualityKiosk (Freelance Initiative)</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Developed a macro to calculate ticket aging from exported Jira CSVs. Included pivot dashboards, 
                  export functionality, and a single-button run system—helping reduce manual effort.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-yellow-600/20 text-yellow-300 border-yellow-600/30">Excel VBA</Badge>
                  <Badge className="bg-yellow-600/20 text-yellow-300 border-yellow-600/30">Automation</Badge>
                  <Badge className="bg-yellow-600/20 text-yellow-300 border-yellow-600/30">Dashboard</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Manulife MIPS Automation</CardTitle>
                <p className="text-purple-400 font-semibold">QualityKiosk</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Led a small team to automate over 150 forms and pages. Improved regression workflows 
                  across enterprise insurance applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30">Java</Badge>
                  <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30">Playwright</Badge>
                  <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30">Team Leadership</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Work Timeline</h2>
            <p className="text-lg text-white/60">My professional journey</p>
          </div>
          <div className="space-y-8">
            {/* Timeline Item 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-4 h-4 bg-purple-400 rounded-full mt-2"></div>
              <div className="flex-1">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">Senior QA Automation Engineer</h3>
                      <div className="flex items-center space-x-2 text-purple-400">
                        <Calendar className="h-4 w-4" />
                        <span>Sept 2024 – Present</span>
                      </div>
                    </div>
                    <p className="text-purple-400 font-semibold mb-2">QualityKiosk Technologies</p>
                    <ul className="text-white/80 space-y-1">
                      <li>• Rotated across multiple enterprise insurance projects with high-impact automation results</li>
                      <li>• Designed and maintained end-to-end automation frameworks (web and mobile)</li>
                      <li>• Delivered over 150 automated test cases per project cycle</li>
                      <li>• Collaborated directly with clients and internal teams for execution and delivery</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-4 h-4 bg-pink-400 rounded-full mt-2"></div>
              <div className="flex-1">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">Solo QA Engineer</h3>
                      <div className="flex items-center space-x-2 text-pink-400">
                        <Calendar className="h-4 w-4" />
                        <span>Oct 2022 – Sept 2024</span>
                      </div>
                    </div>
                    <p className="text-pink-400 font-semibold mb-2">BRIix Financial Technology</p>
                    <ul className="text-white/80 space-y-1">
                      <li>• Sole QA in a fast-paced fintech startup focused on high-end property and villa investments</li>
                      <li>• Ensured stable releases despite rapid feature rollouts</li>
                      <li>• Built regression testing processes and acted as both QA and product quality advocate</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-4 h-4 bg-blue-400 rounded-full mt-2"></div>
              <div className="flex-1">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">QA Tester</h3>
                      <div className="flex items-center space-x-2 text-blue-400">
                        <Calendar className="h-4 w-4" />
                        <span>Nov 2021 – Oct 2022</span>
                      </div>
                    </div>
                    <p className="text-blue-400 font-semibold mb-2">SERA – PT Serasi Autoraya (Astra Group)</p>
                    <ul className="text-white/80 space-y-1">
                      <li>• Worked in a digital auction platform for vehicles and gadgets</li>
                      <li>• Performed manual testing while learning automation independently</li>
                      <li>• Contributed to QA documentation and helped improve bug-reporting standards</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-600/30 backdrop-blur-sm">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Work Together?</h2>
              <p className="text-lg text-white/80 mb-8">
                I'm currently open to new opportunities and freelance projects. Let's discuss how I can help 
                improve your testing processes and automation workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  Get In Touch
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-lg text-white/60">Feel free to reach out for opportunities or collaborations</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-white/80 mb-4">vincentleemarvin@gmail.com</p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Button 
                    variant="outline"
                    onClick={copyEmail}
                    className="border-purple-600/30 text-purple-400 hover:bg-purple-600/20"
                  >
                    Copy Email
                  </Button>
                  <Button 
                    onClick={openMailto}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                <p className="text-white/80 mb-4">Under maintenance</p>
                <Button 
                  disabled
                  className="bg-blue-600/50 text-white cursor-not-allowed"
                >
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white/60 mb-4 md:mb-0">
              © 2025 Vincent Lee Marvin. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white/60 hover:text-white transition-colors"
              >
                Back to Top
              </button>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4 text-yellow-400" />
                <Switch 
                  checked={isDarkMode} 
                  onCheckedChange={toggleTheme}
                  className="data-[state=checked]:bg-purple-600"
                />
                <Moon className="h-4 w-4 text-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;