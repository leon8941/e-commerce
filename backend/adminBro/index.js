const AdminBro = require('admin-bro')
const AdminBroSequelize = require('admin-bro-sequelizejs')
const bcrypt = require('bcrypt')

const db = require('../models/index')

const getAdminBro = () => {
  AdminBro.registerAdapter(AdminBroSequelize)

  let adminUser = {
    resource: db.AdminUsers,
    options: {
      properties: {
        encryptedPassword: {
          isVisible: false,
        },
        password: {
          type: 'string',
          isVisible: {
            list: false, edit: true, filter: false, show: false,
          },
        },
        role: {
          availableValues: [
            {value: 'admin', label: 'Admin'},
            {value: 'marketing', label: 'Marketing'},
            {value: 'finance', label: 'Finance'}, 
          ]
        }
      },
      actions: {
        new: {
          before: async (request) => {
            if(request.payload.password) {
              request.payload = {
                ...request.payload,
                encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                password: undefined,
              }
            }
            return request
          },
        }
      }
    }
  }

  let user = {
    resource: db.Users,
    options: {
      properties: {
        id: {
          isVisible: false,
        },
        encryptedPassword: {
          isVisible: false,
        },
        password: {
          type: 'string',
          isVisible: {
            list: false, edit: true, filter: false, show: false,
          },
        },
      },
      actions: {
        new: {
          before: async (request) => {
            if(request.payload.password) {
              request.payload = {
                ...request.payload,
                encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                password: undefined,
              }
            }
            return request
          },
        }
      }
    }
  }

  const adminBroOptions = {
    resources: [adminUser, user],
    rootPath: '/admin',
  }

  const adminBro = new AdminBro(adminBroOptions)

  return adminBro 
}

const auth = {
  authenticate: async (email, password) => {
    const adminUser = await db.AdminUsers.findOne({
      where: {
        email: email
      }
    })

    if (adminUser) {
      const matched = await bcrypt.compare(password, adminUser.encryptedPassword)
      if (matched) {
        return adminUser
      }
    }
    return false
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
  cookieName: 'some-secret-name'
}


module.exports = { 
  adminBro: () => getAdminBro(),
  auth: auth
}