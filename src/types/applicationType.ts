import { MajorType } from './majorType'
import { PostType } from './postType'

export type ApplicationType = {
  post_id: number
  post_post_type: PostType
  post_title: string
  post_link?: string
  post_major: MajorType
  post_created_at: Date
  post_writer_id: string
}
