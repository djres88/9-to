# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Session
- `GET /api/session`
- `DELETE /api/session`

### User
- `POST options.url`
- `GET /api/users/:id`

**Q: How does search fit into this?**
### Workspaces
- `GET /api/workspaces`
- `GET /api/workspaces/:id`

### Reservations
- `POST /api/workspaces/:workspace_id/`
- `DELETE /api/workspaces/:workspace_id/reservations/:reservation_id`
