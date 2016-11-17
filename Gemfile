source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
gem 'liquid'
gem 'jekyll', '~> 3.3.0'
gem 'jekyll-paginate'
gem 'html-proofer'
