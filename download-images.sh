#!/bin/bash

# Script to download sample images from the original site
# This gives you starter images that you can replace via CMS

echo "📸 Downloading sample images..."
echo ""

# Create directories
mkdir -p public/images/machines public/images/gallery

# Download images using curl
echo "Downloading logo..."
curl -s "https://r.mobirisesite.com/414741/assets/images/photo-1449198063792-7d754d6f3-h_lvle929l.jpg" -o public/images/logo.jpg

echo "Downloading hero background..."
curl -s "https://r.mobirisesite.com/414741/assets/images/photo-1515442094343-9a10f85a4b79.jpeg" -o public/images/hero-bg.jpg

echo "Downloading CTA background..."
curl -s "https://r.mobirisesite.com/414741/assets/images/photo-1458872590620-5056e3311cad.jpeg" -o public/images/cta-bg.jpg

echo "Downloading about image..."
curl -s "https://r.mobirisesite.com/414741/assets/images/screenshot-2024-05-21-alle-08.31.37-935x771.png" -o public/images/about.jpg

echo "Downloading machine images..."
curl -s "https://r.mobirisesite.com/414741/assets/images/img-8114-2304x3072.jpeg" -o public/images/machines/machine1.jpg
curl -s "https://r.mobirisesite.com/414741/assets/images/img-8114-2304x3072.jpeg" -o public/images/machines/machine2.jpg
curl -s "https://r.mobirisesite.com/414741/assets/images/img-8114-2304x3072.jpeg" -o public/images/machines/machine3.jpg

echo "Downloading gallery images..."
curl -s "https://r.mobirisesite.com/414741/assets/images/photo-1521677633993-721dd3f95c10.jpeg" -o public/images/gallery/gallery1.jpg
curl -s "https://r.mobirisesite.com/414741/images/IMG-20221119-WA0044.jpg" -o public/images/gallery/gallery2.jpg
curl -s "https://r.mobirisesite.com/414741/assets/images/g2369d59eaee39bb490ad69faf996-h_lvldyyuj.jpg" -o public/images/gallery/gallery3.jpg
curl -s "https://r.mobirisesite.com/414741/images/IMG-20221119-WA0023.jpg" -o public/images/gallery/gallery4.jpg
curl -s "https://r.mobirisesite.com/414741/assets/images/gf716554ed41de7d1c6ef76d0dc60-h_lvle12lq.jpg" -o public/images/gallery/gallery5.jpg
curl -s "https://r.mobirisesite.com/414741/images/IMG-20221119-WA0025.jpg" -o public/images/gallery/gallery6.jpg

echo ""
echo "✅ Sample images downloaded!"
echo ""
echo "⚠️  IMPORTANT:"
echo "These are temporary starter images from the original site."
echo "Replace them with your own images via the CMS at /admin"
echo ""
echo "Images are stored in:"
echo "  - public/images/logo.jpg"
echo "  - public/images/hero-bg.jpg"
echo "  - public/images/about.jpg"
echo "  - public/images/machines/*.jpg"
echo "  - public/images/gallery/*.jpg"
echo ""
