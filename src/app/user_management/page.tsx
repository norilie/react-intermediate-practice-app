// import React, { FC, memo } from 'react'

// const UserManagement: FC = memo(function UserManagement() {
//   return <p>User Management Page</p>
// })

// export default UserManagement
import React, { FC, memo } from 'react'

const UserManagement: FC = memo(() => {
  return <p>User Management Page</p>
})

UserManagement.displayName = 'UserManagement'
export default UserManagement
// import React, { FC, memo } from 'react'

// export default function UserManagement<FC>() {
//   return <p>User Management Page</p>
// }
