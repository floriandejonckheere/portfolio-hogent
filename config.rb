# frozen_string_literal: true

# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = 'last 2 versions'
end

activate :livereload
activate :i18n, :langs => %i[en]

activate :deploy do |deploy|
  deploy.deploy_method = :sftp
  deploy.host          = 'thalarion.be'
  if ENV['ENV'] == 'production'
    deploy.path          = '/srv/http/florian.dejonckhee.re/'
  else
    deploy.path          = '/srv/http/staging/florian.dejonckhee.re/'
  end

  # Optional Settings
  # deploy.user     = 'tvaughan' # no default
  # deploy.password = 'secret' # no default

  deploy.build_before = true # default: false
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', :layout => false
page '/*.json', :layout => false
page '/*.txt', :layout => false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_css
  activate :minify_javascript

  # Append a hash to asset urls (make sure to use the url helpers)
  activate :asset_hash
end
