'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState('about')

  const personalInfo = {
    name: '张三',
    title: '全栈开发工程师',
    avatar: '/avatar.jpg',
    email: 'zhangsan@example.com',
    phone: '+86 138 0000 0000',
    location: '北京，中国',
    social: {
      github: 'https://github.com/username',
      linkedin: 'https://linkedin.com/in/username',
      twitter: 'https://twitter.com/username',
      website: 'https://yourwebsite.com'
    }
  }

  const skills = [
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'frontend' },
    { name: 'Node.js', level: 75, category: 'backend' },
    { name: 'Python', level: 70, category: 'backend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'frontend' },
    { name: 'MongoDB', level: 65, category: 'backend' }
  ]

  const experiences = [
    {
      title: '高级前端工程师',
      company: '科技公司A',
      period: '2022年3月 - 至今',
      description: '负责公司核心产品的前端架构设计和开发，使用React和Next.js构建高性能Web应用。'
    },
    {
      title: '全栈开发工程师',
      company: '创业公司B',
      period: '2020年6月 - 2022年2月',
      description: '参与公司从0到1的产品开发，负责前端和后端的完整开发流程。'
    },
    {
      title: '前端开发工程师',
      company: '互联网公司C',
      period: '2018年7月 - 2020年5月',
      description: '负责企业级管理系统的前端开发和维护工作。'
    }
  ]

  const projects = [
    {
      title: '电商平台',
      description: '基于Next.js和Node.js构建的现代化电商平台，支持多语言、多货币。',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://github.com/username/ecommerce-platform'
    },
    {
      title: '社交媒体应用',
      description: '实时聊天和内容分享的社交媒体应用，支持移动端和桌面端。',
      tech: ['React Native', 'Socket.io', 'Express', 'PostgreSQL'],
      link: 'https://github.com/username/social-app'
    },
    {
      title: '数据可视化平台',
      description: '企业级数据分析和可视化平台，支持多种图表类型和实时数据更新。',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      link: 'https://github.com/username/data-visualization'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                P
              </div>
              <h1 className="text-xl font-bold text-gray-800">个人主页模板</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                演示模式
              </span>
              <Link
                href="/"
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                返回首页
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              {personalInfo.name.charAt(0)}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{personalInfo.title}</p>

          <div className="flex justify-center space-x-4 mb-6">
            <a href={`mailto:${personalInfo.email}`} className="text-blue-500 hover:text-blue-700">
              {personalInfo.email}
            </a>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">{personalInfo.location}</span>
          </div>

          <div className="flex justify-center space-x-4">
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer"
               className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              GitHub
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer"
               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              LinkedIn
            </a>
            <a href={personalInfo.social.website} target="_blank" rel="noopener noreferrer"
               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
              个人网站
            </a>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'about' && (
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">关于我</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">个人简介</h3>
                  <p className="text-gray-600 leading-relaxed">
                    我是一名充满热情的全栈开发工程师，拥有5年以上的开发经验。专注于构建高性能、用户友好的Web应用。
                    我热爱学习新技术，享受解决复杂问题的过程，并且具有良好的团队协作能力。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">技能专长</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-1">{skill.category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'experience' && (
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">工作经历</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6 relative">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-2"></div>
                    <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'projects' && (
            <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">项目作品</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 font-medium"
                    >
                      查看项目 →
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="fixed bottom-8 right-8 bg-white rounded-lg shadow-lg p-2">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-2 rounded-lg transition-colors text-sm ${
                activeTab === 'about'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              关于我
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-lg transition-colors text-sm ${
                activeTab === 'experience'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              工作经历
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-lg transition-colors text-sm ${
                activeTab === 'projects'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              项目作品
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 {personalInfo.name}. 保留所有权利。</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              GitHub
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              LinkedIn
            </a>
            <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}