'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const [activeDemo, setActiveDemo] = useState('preview')

  const features = [
    {
      icon: '🎨',
      title: '现代化设计',
      description: '采用 Tailwind CSS 实现的响应式设计，支持深色/浅色主题'
    },
    {
      icon: '⚡',
      title: '高性能',
      description: '基于 Next.js 15 和 React 19，提供出色的性能表现'
    },
    {
      icon: '📱',
      title: '响应式布局',
      description: '完美适配桌面端、平板和移动端设备'
    },
    {
      icon: '🔧',
      title: '易于定制',
      description: '模块化设计，轻松修改个人信息和样式'
    },
    {
      icon: '🚀',
      title: '快速部署',
      description: '支持 Vercel、Netlify 等平台一键部署'
    },
    {
      icon: '📊',
      title: 'SEO 优化',
      description: '内置 SEO 优化，提升搜索引擎排名'
    }
  ]

  const techStack = [
    'Next.js 15',
    'React 19',
    'TypeScript',
    'Tailwind CSS',
    'Vercel'
  ]

  const demoScreens = [
    {
      id: 'preview',
      title: '整体预览',
      description: '查看完整的个人主页布局'
    },
    {
      id: 'about',
      title: '关于我',
      description: '个人信息和技能展示'
    },
    {
      id: 'experience',
      title: '工作经历',
      description: '时间线式的工作经历展示'
    },
    {
      id: 'projects',
      title: '项目作品',
      description: '项目卡片和作品集展示'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                P
              </div>
              <h1 className="text-xl font-bold text-gray-800">个人主页模板</h1>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/demo"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                查看演示
              </Link>
              <a
                href="https://github.com/wyz220/nextjs-myself"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                GitHub
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              现代化个人主页
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                模板
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              基于 Next.js 15 和 React 19 构建的个人主页模板，提供现代化设计、优秀性能和易于定制的特点。
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/demo"
                className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                立即体验
              </Link>
              <a
                href="https://github.com/wyz220/nextjs-myself"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                查看源码
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">主要特性</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              这个模板提供了构建个人主页所需的所有功能，让你的在线形象更加专业。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">技术栈</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <span key={index} className="px-6 py-3 bg-gray-100 rounded-lg text-gray-700 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">功能预览</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              查看个人主页的主要功能模块，了解这个模板能为你带来什么。
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Demo Navigation */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
                {demoScreens.map((screen) => (
                  <button
                    key={screen.id}
                    onClick={() => setActiveDemo(screen.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeDemo === screen.id
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {screen.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Demo Content */}
            <div className="bg-gray-50 rounded-xl p-8 min-h-[400px]">
              {activeDemo === 'preview' && (
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                    张
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">张三</h3>
                  <p className="text-gray-600 mb-4">全栈开发工程师</p>
                  <div className="flex justify-center space-x-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">关于我</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">工作经历</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">项目作品</span>
                  </div>
                </div>
              )}

              {activeDemo === 'about' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">关于我</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      我是一名充满热情的全栈开发工程师，拥有5年以上的开发经验。专注于构建高性能、用户友好的Web应用。
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="font-medium text-gray-700 mb-2">JavaScript</div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="font-medium text-gray-700 mb-2">React</div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeDemo === 'experience' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">工作经历</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">高级前端工程师</h4>
                      <p className="text-blue-600">科技公司A</p>
                      <p className="text-sm text-gray-500">2022年3月 - 至今</p>
                      <p className="text-gray-600">负责公司核心产品的前端架构设计和开发</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">全栈开发工程师</h4>
                      <p className="text-blue-600">创业公司B</p>
                      <p className="text-sm text-gray-500">2020年6月 - 2022年2月</p>
                      <p className="text-gray-600">参与公司从0到1的产品开发</p>
                    </div>
                  </div>
                </div>
              )}

              {activeDemo === 'projects' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">项目作品</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">电商平台</h4>
                      <p className="text-gray-600 mb-3">基于Next.js和Node.js构建的现代化电商平台</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Next.js</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Node.js</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">社交媒体应用</h4>
                      <p className="text-gray-600 mb-3">实时聊天和内容分享的社交媒体应用</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">React</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Socket.io</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">开始构建你的个人主页</h2>
          <p className="text-xl mb-8 opacity-90">
            使用这个模板，快速创建一个专业的个人主页
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/wyz220/nextjs-myself"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              立即开始
            </a>
            <Link
              href="/demo"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
            >
              查看演示
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded flex items-center justify-center text-white text-xs font-bold">
                P
              </div>
              <span className="text-xl font-bold">个人主页模板</span>
            </div>
            <p className="text-gray-400 mb-4">
              基于 Next.js 15 构建的现代化个人主页模板
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/wyz220/nextjs-myself"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Vercel
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              &copy; 2024 个人主页模板. 保留所有权利.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}