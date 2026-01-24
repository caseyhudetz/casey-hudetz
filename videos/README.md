# Video Hosting Instructions

This folder is for self-hosted videos on your portfolio site.

## How to Add Videos

1. **Name your video files** using these exact names (the HTML already references them):
   - `experiment-1.mp4` - First AI experiment video
   - `experiment-2.mp4` - Second AI experiment video
   - `experiment-3.mp4` - Third AI experiment video
   - `bike-bus.mp4` - Drone footage of the local bike bus (Community section)

2. **Optimize your videos** before uploading:
   - Keep videos short (under 2 minutes recommended for web)
   - Compress to reduce file size (aim for under 50MB each)
   - Use MP4 format with H.264 codec for best compatibility
   - Consider 720p or 1080p resolution

3. **Upload to GitHub**:
   - Drag and drop files directly into this folder on GitHub
   - Or use git commands:
     ```bash
     git add videos/*.mp4
     git commit -m "Add videos"
     git push
     ```

4. **GitHub file size limits**:
   - Individual files: 100MB max
   - Recommended: Keep each video under 50MB for fast loading
   - If videos are larger, consider using Git LFS or an external host

## Alternative: External Video Hosting

If your videos are too large for GitHub, consider:

1. **YouTube (unlisted)** - Upload as unlisted, then update the HTML to use YouTube embeds
2. **Vimeo** - Similar to YouTube, good for professional content
3. **Cloudinary** - Free tier available, good for media hosting
4. **AWS S3 / Cloudflare R2** - More technical but very reliable

## Current Video References

The HTML currently expects these files:
- `videos/experiment-1.mp4` (AI Experiments carousel, slide 1)
- `videos/experiment-2.mp4` (AI Experiments carousel, slide 2)
- `videos/experiment-3.mp4` (AI Experiments carousel, slide 3)
- `videos/bike-bus.mp4` (Community section)
