from feedgen.feed import FeedGenerator
import os

fg = FeedGenerator()
fg.id('http://example.com')
fg.title('TODO')
fg.author({'name': 'Sam Christy', 'email': 'TODO'})
fg.link(href='http://example.com', rel='alternate')
fg.description("TODO")

for filename in os.listdir('web-content/posts/published/'):
    with open('web-content/posts/published/' + filename, 'r') as f:
        content = f.readlines()
        content = [x.strip() for x in content]

        fe = fg.add_entry()

        fe.id(content[0])
        fe.title(content[0])
        fe.link(href='http://example.com/' + filename, rel='alternate')
        fe.description("TODO")

        date = ":".join(content[1].split(":")[1:])
        fe.pubDate(date)

with open('./public/rss.xml', 'w') as rss_file:
    rss_file.write(fg.rss_str(pretty=True).decode('utf-8'))
