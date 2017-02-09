import Telescope from 'meteor/nova:lib';
import Users from 'meteor/nova:users';
import Posts from 'meteor/nova:posts';
import Categories from 'meteor/nova:categories';
import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {

  sitemaps.add('/sitemap.xml', function () {

    // Home
    var pages = [];
    pages.push({page: "/", changefreq: 'daily', priority: 1});
    pages.push({page: "/daily", changefreq: 'daily', priority: 1});
    pages.push({page: "/?view=top", changefreq: 'daily', priority: 1});
    pages.push({page: "/?view=best", changefreq: 'daily', priority: 1});
    pages.push({page: "/?view=new", changefreq: 'daily', priority: 1});
    pages.push({page: "/daily", changefreq: 'daily', priority: 1});
    pages.push({page: "/curated-lists", changefreq: 'monthly', priority: 0.8});
    pages.push({page: "/markdown", changefreq: 'monthly', priority: 0.8});
    pages.push({page: "/new-post", changefreq: 'monthly', priority: 0.8});

    // Tags
    var tags = Categories.find({ topic: { $ne: true } }).fetch();
    _.each(tags, function (tag) {
      pages.push({
        page: "/tag/" + tag.slug,
        changefreq: 'daily',
        priority: 0.8
      });
    });

    // Topics
    var topics = Categories.find({ topic: { $eq: true } }).fetch();
    _.each(topics, function (topic) {
      pages.push({
        page: "/topic/" + topic.slug,
        changefreq: 'weekly',
        priority: 0.8
      });
    });

    // Posts
    var posts = Posts.find({}).fetch();
    _.each(posts, function (post) {
      var priority = (post.url) ? 0.6 : 0.8;
      pages.push({
        page: Posts.getPageUrl(post),
        changefreq: 'monthly',
        priority: priority
      });
    });

    // Users
    var users = Meteor.users.find({}).fetch();
    _.each(users, function (user) {
      pages.push({
        page: "users/" + user.telescope.slug,
        changefreq: 'monthly',
        priority: 0.5
      });
    });

    return pages;
  });
}

