# frozen_string_literal: true

namespace :deploy do
  def deploy(env)
    puts "Deploying to #{env}"
    system "ENV=#{env} bundle exec middleman deploy"
  end

  task :staging do
    deploy :staging
  end

  task :production do
    deploy :production
  end
end
