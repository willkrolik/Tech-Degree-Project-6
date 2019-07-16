const express = require('express');
const router = express.Router();
const { data } = require('../data/projectsData.json');
const { projects } = data;

router.get( '/', ( req, res ) => {
    const numberOfProjects = projects.length;
    const projectId = Math.floor( Math.random() * numberOfProjects );
    res.redirect( `/cards/${projectId}` )
  });