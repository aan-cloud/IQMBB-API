import { Hono } from 'hono'
import Home from '../public/page'
import operatorRoutes from './routers/operatorRoutes';
import sectionRoutes from './routers/sectionRoutes';
import machineRoutes from './routers/machineRoutes';
import tubeRoutes from './routers/tubeRoutes';

const app = new Hono();

app.get('/', async (c) => {
    return  c.html(Home());
});

app.route('/operator', operatorRoutes);
app.route('/section', sectionRoutes);
app.route('/machine', machineRoutes);
app.route('/tube', tubeRoutes);

export default app;