import { MajorType } from './majorType'
import { PostType } from './postType'

export type ApplicationType = {
  id: number
  post_type: PostType
  title: string
  link?: string
  major: MajorType
  content: string
  created_at: Date
  writer_id: string
  user_oauth_id: string
}
