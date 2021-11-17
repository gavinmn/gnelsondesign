import Link from "next/link"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Hero from "@/components/hero"
import Section from "@/components/section"
import Arena from "@/components/svg/arena"
import Post from "@/components/post"
import ArrowRight from "@/components/svg/arrowright"
import Project from "@/components/project"
import Icon from "@/components/icon"

import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { postFilePaths, POSTS_PATH } from "../lib/mdxUtils"

import holo from "../public/images/index/holo.png"
import vscode from "../public/images/index/vscode.png"
import things from "../public/images/index/things.png"
import g1 from "../public/images/index/g1.png"
import obsidian from "../public/images/index/obsidian.png"
import craft from "../public/images/index/craft.png"
import camo from "../public/images/index/camo.png"
import reflect from "../public/images/index/reflect.png"
import stocketa from "../public/images/index/stocketa.png"
import apollo from "../public/images/index/apollo.png"
import xcode from "../public/images/index/xcode.png"
import claquette from "../public/images/index/claquette.png"
import slack from "../public/images/index/slack.png"
import github from "../public/images/index/github.png"

const IndexPage = ({ posts }) => {
  const orderedPosts = posts.sort(
    (a, b) =>
      Number(new Date(b.data.modified)) - Number(new Date(a.data.modified))
  )

  return (
    <>
      <Layout>
        <SEO />
        <div className="grid gap-16 my-16 md:my-32 auto-rows-auto ">
          <Hero />
          <Section title="Connect">
            <div className="flex flex-row justify-between sm:justify-start align-center">
              <a
                className="sm:mr-8 text-tertiary"
                href="mailto:gavin@nelson.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
              <a
                className="sm:mr-8 text-tertiary"
                href="https://twitter.com/Gavmn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                className="sm:mr-8 text-tertiary"
                href="https://github.com/gavinmn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="sm:mr-8 text-tertiary"
                href="https://dribbble.com/Gavin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>
              <Arena />
            </div>
          </Section>
          <Section title="Notes">
            <Link href="/notes" passhref>
              <a
                className=" text-tertiary group"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wander the garden
                <ArrowRight />
              </a>
            </Link>
          </Section>
          <Section title="Posts">
            {orderedPosts.map((post, key) => {
              return (
                <div className="mb-2">
                  <Post
                    key={key}
                    title={post.data.title}
                    date={post.data.date}
                    href={`${post.filePath.replace(/\.mdx?$/, "")}`}
                  />
                </div>
              )
            })}
          </Section>
          <Section title="Projects">
            <div className="mb-4">
              <Project
                link="/highlights"
                title="Highlights"
                description="A feed of passages I’ve highlighted from articles across the web"
              />
            </div>
            <div className="mb-4">
              <Project
                link="/musicthread/heavy-rotation"
                title="Heavy Rotation"
                description="A collection of what I've been listening to recently"
              />
            </div>
            <Project
              link="https://gumroad.com/l/dvctd"
              title="Monterey"
              description="A macOS and iOS icon theme"
            />
          </Section>
          <Section title="Select Icons">
            <p className="mb-4">
              If you'd like to work with me on an icon, please{" "}
              <a
                href="mailto:gavin@nelson.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                get in touch
              </a>
              . <br />
              For behind the scenes process posts,{" "}
              <a
                href="mailto:gavin@nelson.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                follow along on Twitter
              </a>
              .
            </p>
            <div className="grid gap-4 sm:grid-cols-2 grid-rows-auto">
              <Icon
                src={holo}
                title="Holo"
                subtitle="GitHub"
                link="https://github.com/mobile"
              />
              <Icon
                src={vscode}
                title="VS Code"
                subtitle="Personal"
                width="400"
                arrow="download"
                link="https://gnelson.gumroad.com/l/vscode"
              />
              <div className="sm:col-span-2">
                <Icon
                  src={things}
                  title="Things"
                  subtitle="Personal"
                  width="800"
                  arrow="download"
                  link="https://gnelson.gumroad.com/l/things-icon"
                />
              </div>
              <Icon
                src={g1}
                title="G1 Chip"
                subtitle="GitHub"
                width="400"
                link="https://github.com/mobile"
              />
              <Icon
                src={camo}
                title="Camo"
                subtitle="Reincubate"
                width="400"
                link="https://reincubate.com/camo/"
              />
              <div className="sm:col-span-2">
                <Icon
                  src={craft}
                  title="Craft"
                  subtitle="Craft Docs"
                  width="800"
                  link="https://www.craft.do"
                />
              </div>
              <Icon
                src={obsidian}
                title="Obsidian"
                subtitle="Personal"
                width="400"
                arrow="download"
                link="https://gnelson.gumroad.com/l/obsidian2"
              />
              <Icon
                src={reflect}
                title="Reflect"
                subtitle="Reflect Notes"
                width="400"
                link="https://reflect.app"
              />
              <div className="sm:col-span-2 ">
                <Icon
                  src={claquette}
                  title="Claquette"
                  subtitle="Peak Step"
                  width="800"
                  link="https://www.peakstep.com/claquette/"
                />
              </div>
              <Icon
                src={stocketa}
                title="Stocketa"
                subtitle="Stocketa"
                width="400"
                link="https://stocketa.com"
              />
              <Icon
                src={apollo}
                title="N.E.L.S.O.N."
                subtitle="Apollo Reddit"
                width="400"
                link="https://apolloapp.io"
              />
              <div className="sm:col-span-2">
                <Icon
                  src={github}
                  title="Early Bird & Hyperspace"
                  subtitle="GitHub"
                  width="800"
                  link="https://github.com/mobile"
                />
              </div>
              <Icon
                src={xcode}
                title="Xcode"
                subtitle="Personal"
                width="400"
                arrow="none"
              />
              <Icon
                src={slack}
                title="Slack"
                subtitle="Personal"
                width="400"
                arrow="none"
              />
            </div>
          </Section>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export function getStaticProps() {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))

    const { data } = matter(source)

    return {
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
