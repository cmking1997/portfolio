"use client"
import { Button, Flex, Typography } from "antd";
const { Link } = Typography;
import { useState } from "react";
import reactIcon from '../public/react.svg';
import angularIcon from '../public/angular.svg';
import djangoIcon from '../public/django.svg';
import githubIcon from '../public/github.svg';
import gitlabIcon from '../public/gitlab.svg';
import javascriptIcon from '../public/javascript.svg';
import pythonIcon from '../public/python.svg';
import springBootIcon from '../public/springboot.svg';
import typescriptIcon from '../public/typescript.svg';
import nextIcon from '../public/nextdotjs.svg';
import nodeIcon from '../public/nodedotjs.svg';
import Image from "next/image";

enum contentState {
  home,
  about
}

export default function Home() {
  const [currentState, setCurrentState] = useState(contentState.home);

  const tools = [
    [{icon: typescriptIcon, text: "Typescript"}, {icon: reactIcon, text: "React"}, {icon: angularIcon, text: "Angular"}, {icon: javascriptIcon, text: "Javascript"}],
    [{icon: pythonIcon, text: "Python"}, {icon: djangoIcon, text: "Django"}, {text: "Java"}, {icon: springBootIcon, text: "Spring Boot"}],
    [{text: "AWS"}, {text: "Lambda"}, {text: "DynamoDB"}, {text: "RDS"}],
    [{text: "SQL"}, {text: "NoSQL"}, {text: "CI/CD"}, {text: "Architecture"}],
    [{icon: githubIcon, text: "GitHub"}, {icon: gitlabIcon, text: "GitLab"}, {icon: nextIcon, text: "Next.js"}, {icon: nodeIcon, text: "Node.js"}],
  ]

  const downloadResume = () => {
    console.log('resume download');
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Flex className="mainWrap">
      <div className="backgroundBlur" />
      <Flex className="header">
        <Typography className="title blurAvoider">Collin King&apos;s Portfolio</Typography>
      </Flex>
      <Flex className="buttonHolder">
        <Button className="button" onClick={() => setCurrentState(contentState.home)}>Home</Button>
        <Button className="button" onClick={() => setCurrentState(contentState.about)}>About Me</Button>
        <Button className="button" onClick={() => downloadResume()}>Download Resume</Button>
      </Flex>
      <Flex className="mainContent blurAvoider">
        {currentState === contentState.home && (
          <Flex className="innerContentWrap">
            <Flex className="center">
              <Typography className="boldFont">
                Full Stack Software Engineer | Building Scalable Web Applications
              </Typography>
              <Typography className="regularFont wrap">
                I&apos;m a software developer with an 8+ year career focused on full stack engineering with Typescript, Python, and AWS.
              </Typography>
            </Flex>
            <Flex className="toolsContainer">
              
              <Typography className="regularFont wrap">
                Some tools I use, you can find a more complete list on my resume (download above).
              </Typography>
              {/* <Image src={reactIcon} alt="React_Icon"></Image> */}
              {tools.map((toolArr, index) => (
                <Flex className="toolRow" key={index}>
                  {toolArr.map((tool, subIndex) => (
                    <Flex className="tool" key={subIndex}>
                      {tool.icon && (<Image src={tool.icon} alt="icon"></Image>)}
                      <Typography className="toolText">{tool.text}</Typography>
                    </Flex>
                  ))}
                </Flex>
              ))}
            </Flex>
            {/* tools used */}
          </Flex>
        )}
        {currentState === contentState.about && (
          <Flex className="innerContentWrap">
            <Flex className="subContent">
              <Typography className="boldFont">My Career</Typography>
              <Typography className="regularFont wrap">
                I graduated from The University of Louisville in 2019 with by Bachelors in Computer Engineering and Computer Science.
                And have worked on remote distributed teams since 2020, working in both enterprise and startup settings.
                With a focus on full-stack development (though I&apos;ve also had both frontend and backend specific roles). My primary
                languages of focus have been Typescript (React & Angular), Python (Django), & Java (Spring Boot). My main cloud solution
                focus has been Amazon Web Services (AWS).
              </Typography>
            </Flex>
            <Flex className="subContent">
            <Typography className="boldFont">What I&apos;m Looking For in My Next Role</Typography>
              <Typography className="regularFont">
                My goal is to continue to contribute as an individual contributor (IC), in roles where I can still contribute but might
                also have the opportunity to mentor more junior developers and guide the teams trajectory. I want to be a part of a team
                where I can see the impact my contribution has on the products users (whether internal or external). And a role where I
                can say I&apos;m making a difference somewhere, from making someone else&apos;s job easier to having community impact
                I like being able to know what my work goes towards and the business goals it is achieving.
              </Typography>
            </Flex>
            <Flex className="subContent">
            <Typography className="boldFont">Hobbies & Etc.</Typography>
              <Typography className="regularFont">
                I like to relax by playing video games with friends, since many have moved away. As well as board games with my nearby
                friends and family; including Settlers of Catan, Quacks of Quedlinburg, and Magic the Gathering. I also enjoy programming
                my video game ideas, creating art, and working recreational math problems.
              </Typography>
              <Flex>
                <Typography className="regularFont">
                  I&apos;ve even has some of my recreation math work published on&nbsp;
                </Typography>
                <Link className="regularFont" href="https://oeis.org/A343403" target="_blank">The Online Encyclopedia of Integer Sequences.</Link>
              </Flex>
            </Flex>

          </Flex>
        )}
      </Flex>
      <Flex className="footer blurAvoider">
        <Typography className="boldFont">Lets Connect | Email: collinmking1997@gmail.com | Cell: (502) 550 - 2494 |&nbsp;</Typography>
        <Link className="boldFont" href="https://www.linkedin.com/in/cking1997/" target="_blank">LinkedIn</Link>
      </Flex>
    </Flex>
  );
}
