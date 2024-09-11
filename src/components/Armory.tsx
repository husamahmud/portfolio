import IconCloud from '@/components/magicui/icon-cloud'

const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'express',
  'nodejs',
  'nextjs',
  'nestjs',
  'prisma',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'jest',
  'docker',
  'git',
  'github',
  'bootstrap',
  'tailwindcss',
  'antdesign',
  'framer',
  'redux',
  'vite',
  'chakraui',
  'mui',
  'graphql',
  'supabase',
  'socketdotio',
  'flask',
  'python',
  'mongodb',
  'redis',
  'c',
  'cplusplus',
  'bash',
  'linux',
  'macos',
  'postman',
  'photoshop',
  'illustrator',
  'premierepro',
  'aftereffects',
  'apple',
  'drizzle',
]

export default function Armory() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden bg-background px-20 pb-20">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
