import express, { Request, Response } from 'express';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/test',
    routes: (req: Request, res: Response) => {
      res.json({
        success: true,
        message: 'Test successful'
      });
    }
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
