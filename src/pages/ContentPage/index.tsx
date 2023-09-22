import React from "react";
import "./index.scss";
import Sidebar from "src/components/Sidebar";
import Navigation from "src/components/Navigation";
import articlesData from "./articlesData.json";
import { Grid, Paper, Typography } from "@mui/material";
import { articleIcon } from "src/assets/ArticleImages";
import { Box } from "@mui/joy";
import { empty, content1, content2 } from "src/assets/ArticleImages";
function Content() {
  return (
    <div className="content-container">
      <Sidebar />
      <div className="main">
        <Navigation />
        <div className="heading-container">
          <span>Contents to improve your company and team</span>
        </div>
        <div className="sub-heading-container">
          <span>
            Unique content created to help you to learn and sharpen new new
            skills.
          </span>
        </div>
        <div className="main-sub-container">
          <div className="articles-container">
            <Grid container spacing={0}>
              <Grid item xs={12} sm={8} md={9} lg={8}>
                <Grid container spacing={1}>
                  {articlesData.map((article) => (
                    <Grid item xs={12} sm={8} md={4} key={article.id}>
                      <Paper
                        elevation={0}
                        style={{
                          width: "100%",
                          padding: "1rem",
                          background: "none",
                        }}
                      >
                        <div className="article-image-container">
                          <div className="image">
                            <img
                              src={`./${article.image}`}
                              alt={article.title}
                              style={{ maxWidth: "100%", height: "auto" }}
                            />
                          </div>
                        </div>

                        <div className="title-heading">
                          <span>{article.title}</span>
                        </div>
                        <div className="article-description">
                          <span>{article.description}</span>
                        </div>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <div className="categories-content-container">
                  <div className="categories-heading">
                    <span>Categories</span>
                  </div>
                  {/* Categories Content (5 items) */}
                  <Grid container spacing={1}>
                    <Grid item xs={6} className="categories-container">
                      <div className="category">
                        <span>About Parnity</span>
                      </div>
                    </Grid>
                    <Grid item xs={6} className="categories-container">
                      <div className="category">
                        <span>Business Tips</span>
                      </div>
                    </Grid>
                    <Grid item xs={8} className="categories-container">
                      <div className="category">
                        <span>partenering management </span>
                      </div>
                    </Grid>
                    <Grid item xs={6} className="categories-container">
                      <div className="category">
                        <span>digital marketing tips</span>
                      </div>
                    </Grid>
                    <Grid item xs={6} className="categories-container">
                      <div className="category">
                        <span>sales tips</span>
                      </div>
                    </Grid>
                  </Grid>
                  <div className="top-content-heading">
                    <span>Top Content</span>
                  </div>
                  {/* Top Content (3 items) */}
                  <div className="top-content-container">
                    <div className="top-content">
                      <div className="content-image">
                        <img src={empty} alt="Top Content 1" />
                      </div>

                      <div className="content-description-text">
                        Navigating the Australian Freight Forwarding
                        Market:Trends and Insights
                      </div>
                    </div>
                    <div className="top-content">
                      <div className="content-image">
                        <img src={content1} alt="Top Content 1" />
                      </div>

                      <div className="content-description-text">
                        Productivity tools: how to use them in your freight
                        forwarder
                      </div>
                    </div>
                    <div className="top-content">
                      <div className="content-image">
                        <img src={content2} alt="Top Content 1" />
                      </div>

                      <div className="content-description-text">
                        The common risks in freight forwarding and how you can
                        manage them
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
