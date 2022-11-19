import BlogPostCard from '@components/BlogPostCard';
import VideoCard from '@components/VideoCard';
import { Icon3dCubeSphere, IconColorSwatch, IconStatusChange } from '@tabler/icons';
import { Title, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

export interface Person {
  ID: number;
  name: string;
  age: number;
}

export function Welcome() {
  return (
    <>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <Title
              align="left"
              color="dimmed"
              className="font-bold text-3xl md:text-5xl mb-1 dark:text-white"
            >
              <Text inherit component="span">
                Alan Kemboi
              </Text>
            </Title>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Developer{' '}
              <span className="font-semibold from-[#D8B4FE] to-[#818CF8]"> 💖 Open-Source</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Helping developers build a faster web. Teaching about web development, serverless, and
              React / Next.js.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Alan Kemboi"
              height={176}
              width={176}
              src="/avatar.jpg"
              sizes="30vw"
              priority
              className="rounded-full filter grayscale"
            />
          </div>
        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="Front-end microservice"
            description="Everything I Know About Style Guides, Design Systems, and Component Libraries"
            icon={<IconColorSwatch />}
          />
          <BlogPostCard
            description="Rust Is The Future of JavaScript Infrastructure"
            title="Rust"
            icon={<Icon3dCubeSphere />}
          />
          <BlogPostCard
            description="Past, Present, and Future of React State Management"
            title="React state management"
            icon={<IconStatusChange />}
          />
        </div>
        <Link
          href="/blog"
          className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
        >
          <>
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </>
        </Link>

        <h3 className="font-bold text-2xl md:text-4xl  mb-4 mt-16 text-gray-600 dark:text-white">
          Learn React & Next.js
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Build and deploy a modern SaaS application using the most popular open-source software.
          This course is 12 hours long and is completely live streamed.
        </p>
        <VideoCard
          index="01"
          href="https://www.youtube.com/channel/UCQ38AC_fABw3gbfCNA60ibQ?sub_confirmation=1"
          length="1:02:45"
          title="Introduction to React 2025"
        />
        <VideoCard
          index="02"
          href="https://www.youtube.com/channel/UCQ38AC_fABw3gbfCNA60ibQ?sub_confirmation=1"
          length="54:22"
          title="Firestore, Chakra UI, Absolute Imports"
        />
        <VideoCard
          index="03"
          href="https://www.youtube.com/channel/UCQ38AC_fABw3gbfCNA60ibQ?sub_confirmation=1"
          length="1:08:30"
          title="Designing & Building the Dashboard"
        />
        <VideoCard
          index="04"
          href="https://www.youtube.com/channel/UCQ38AC_fABw3gbfCNA60ibQ?sub_confirmation=1"
          length="1:13:45"
          title="Firebase Admin with Next.js + SWR"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCQ38AC_fABw3gbfCNA60ibQ?sub_confirmation=1"
          className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
        >
          Watch all videos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 ml-1"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </a>
        <span className="h-16" />
      </div>
    </>
  );
}
