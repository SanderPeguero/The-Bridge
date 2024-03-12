import React from 'react';
import ContentCard from './ContentCard';

const ContentArea = () => {
  const cards = [
    {
      title: 'Clockify',
      description: 'Clockify is a web-based time tracking tool for individuals and teams. It helps users log and monitor time spent on various activities and projects, offering features like project organization, reporting, and integrations with popular tools.',
      link: 'https://app.clockify.me/tracker',
      image: 'https://firebasestorage.googleapis.com/v0/b/the-bridge-535cf.appspot.com/o/Clockify.png?alt=media&token=8d830733-03e0-4ae8-84b7-5c89c711d04c',
      company: 'cake.com'
    },
    {
      title: 'Jira Workspace',
      description: 'Jira Software is a project management tool by Atlassian for software development teams. It helps plan, track, and manage projects with features like agile boards, customizable dashboards, and seamless integration with development tools.',
      link: 'https://reactdev.atlassian.net/',
      image: 'https://firebasestorage.googleapis.com/v0/b/the-bridge-535cf.appspot.com/o/Jira.png?alt=media&token=de8e7808-2c80-45a0-b617-25ecb802af89',
      company: 'Atlassian'
    },
    {
      title: 'Google Sheets',
      description: 'Google Sheets is a cloud-based spreadsheet software for real-time collaboration. It offers features like data organization, calculations, and sharing, making it ideal for personal and professional use.',
      link: 'https://docs.google.com/spreadsheets/d/1a2MqLkmhtlnw9iW7Ym3N3AD7jhj28NhzwqIOUdNvjpg/edit?usp=sharing',
      image: 'https://firebasestorage.googleapis.com/v0/b/the-bridge-535cf.appspot.com/o/Google%20Sheets.png?alt=media&token=eebc4599-26ff-4607-aac6-e78f0c13d6d0',
      company: 'Google'
    },
    {
      title: 'Github',
      description: 'GitHub is a web-based platform for version control using Git. It provides features for collaborative coding, such as code hosting, pull requests, issue tracking, and project management tools. With GitHub, developers can collaborate on software projects, manage code changes, and streamline the development process.',
      link: 'https://github.com/SanderPeguero?tab=repositories',
      image: 'https://firebasestorage.googleapis.com/v0/b/the-bridge-535cf.appspot.com/o/Github.png?alt=media&token=0e4f52c6-85d1-4b37-8cf6-a0c4d68f02e7',
      company: 'cake.com'
    },
    {
      title: 'Slack',
      description: 'Slack is a messaging platform for team collaboration. It allows real-time communication, file sharing, and integration with other tools, facilitating seamless teamwork and productivity.',
      link: 'https://app.slack.com/client/T065UMC8YH0/unreads',
      image: 'https://firebasestorage.googleapis.com/v0/b/the-bridge-535cf.appspot.com/o/Slack.png?alt=media&token=071ed0da-0803-4187-82f1-f4a4c912c0fa',
      company: 'Atlassian'
    },

    // Add more cards as needed
  ];

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
      <div className="mx-auto max-w-screen-xl px-3 w-full">
        <div className="grid w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Mapeo      map <Cards />*/}
          {cards.map((card, index) => (
            <div key={index}>
              <ContentCard
                title={card.title}
                description={card.description}
                link={card.link}
                image={card.image}
                company={card.company}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="mx-auto w-full">
      <div className="lg:flex flex-wrap read-the-docs min-w-full block flex-grow">
        {cards.map((card, index) => (
          <div key={index} className="">
            <ContentCard
              title={card.title}
              description={card.description}
              link={card.link}
              image={card.image}
              company={card.company}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentArea;