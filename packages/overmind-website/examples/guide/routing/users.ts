const javascript = {
  react: [
    {
      fileName: 'components/App.js',
      target: 'jsx',
      code: `
import React from 'react'
import { useOvermind } from '../overmind'
import Users from './Users'

const App = () => {
  const { state } = useOvermind()

  return (
    <div className="container">
      <nav>
        <a href="/">Home</a>
        <a href="/users">Users</a>
      </nav>
      {state.currentPage === 'home' ? <h1>Hello world!</h1> : null}
      {state.currentPage === 'users' ? <Users /> : null}
    </div>
  )
}

export default App
    `,
    },
    {
      fileName: 'components/Users.js',
      target: 'jsx',
      code: `
import React from 'react'
import { useOvermind } from '../overmind'
import UserModal from './UserModal'

const Users = () => {
  const { state } = useOvermind()

  return (
    <div className="content">
      {state.isLoadingUsers ? (
        <h4>Loading users...</h4>
      ) : (
        <ul>
          {state.users.map(user => (
            <li key={user.id}>
              <a href={"/users/" + user.id}>{user.name}</a>
            </li>
          ))}
        </ul>
      )}
      {state.isLoadingUserDetails || state.modalUser ? <UserModal /> : null}
    </div>
  )
}

export default Users
    `,
    },
    {
      fileName: 'components/UserModal.js',
      target: 'jsx',
      code: `
import React from 'react'
import { useOvermind } from '../overmind'

const UserModal = () => {
  const { state } = useOvermind()

  return (
    <a href="/users" className="backdrop">
      <div className="modal">
        {state.isLoadingUserDetails ? (
          <h4>Loading user details...</h4>
        ) : (
          <>
            <h4>{state.modalUser.name}</h4>
            <h6>{state.modalUser.details.email}</h6>
            <nav>
              <a href={"/users/" + state.modalUser.id + "?tab=0"}>bio</a>
              <a href={"/users/" + state.modalUser.id + "?tab=1"}>address</a>
            </nav>
            {state.currentUserModalTabIndex === 0 ? (
              <div className="tab-content">{state.modalUser.details.bio}</div>
            ) : null}
            {state.currentUserModalTabIndex === 1 ? (
              <div className="tab-content">{state.modalUser.details.address}</div>
            ) : null}
          </>
        )}
      </div>
    </a>
  )
}

export default UserModal
    `,
    },
  ],
  vue: [
    {
      fileName: 'components/app-component.vue (template)',
      target: 'markup',
      code: `
<div class="container">
  <nav>
    <a href="/">Home</a>
    <a href="/users">Users</a>
  </nav>
  <h1 v-if="state.currentPage === 'home'">Hello world!</h1>
  <users-list v-if="state.currentPage === 'users'"></users-list>
</div>
    `,
    },
    {
      fileName: 'components/users-list.vue (template)',
      target: 'markup',
      code: `
<div class="content">
  <h4 v-if="state.isLoadingUsers">Loading users...</h4>
  <ul v-else>
    <li v-for="user in state.users" :key="user.id">
      <a :href="'/users/' + user.id">{{ user.name }}</a>
    </li>
  </ul>
  <user-modal v-if="state.isLoadingUserDetails || state.userModal"></user-modal>
</div>
    `,
    },
    {
      fileName: 'components/user-modal.vue (template)',
      target: 'markup',
      code: `
<a href="/users" class="backdrop">
  <div class="modal">
    <h4 v-if="state.isLoadingUserDetails">Loading user details...</h4>
    <div v-else>
      <h4>{{ state.modalUser.name }}</h4>
      <h6>{{ state.modalUser.details.email }}</h6>
      <nav>
        <a :href="'/users/' + state.modalUser.id + '?tab=0'">bio</a>
        <a :href="'/users/' + state.modalUser.id + '?tab=1'">address</a>
      </nav>
      <div
        v-if="state.currentUserModalTabIndex === 0"
        class="tab-content"
      >
        {{ state.modalUser.details.bio }}
      </div>
      <div
        v-if="state.currentUserModalTabIndex === 1"
        class="tab-content"
      >
        {{ modalUser.details.address }}
      </div>
    </div>
  </div>
</a>
    `,
    },
  ],
}

const typescript = {
  react: [
    {
      fileName: 'components/App.tsx',
      code: `
import * as React from 'react'
import { useOvermind } from '../overmind'
import Users from './Users'

const App: React.FunctionComponent = () => {
  const { state } = useOvermind()

  return (
    <div className="container">
      <nav>
        <a href="/">Home</a>
        <a href="/users">Users</a>
      </nav>
      {state.currentPage === 'home' ? <h1>Hello world!</h1> : null}
      {state.currentPage === 'users' ? <Users /> : null}
    </div>
  )
}

export default App
    `,
    },
    {
      fileName: 'components/Users.tsx',
      code: `
import * as React from 'react'
import { useOvermind } from '../overmind'
import UserModal from './UserModal'

const Users: React.FunctionComponent = () => {
  const { state } = useOvermind()

  return (
    <div className="content">
      {state.isLoadingUsers ? (
        <h4>Loading users...</h4>
      ) : (
        <ul>
          {state.users.map(user => (
            <li key={user.id}>
              <a href={"/users/" + user.id}>{user.name}</a>
            </li>
          ))}
        </ul>
      )}
      {state.isLoadingUserDetails || state.modalUser ? <UserModal /> : null}
    </div>
  )
}

export default Users
    `,
    },
    {
      fileName: 'components/UserModal.tsx',
      code: `
import * as React from 'react'
import { useOvermind } from '../overmind'

const UserModal: React.FunctionComponent = () => {
  const { state } = useOvermind()

  return (
    <a href="/users" className="backdrop">
      <div className="modal">
        {state.isLoadingUserDetails ? (
          <h4>Loading user details...</h4>
        ) : (
          <>
            <h4>{state.modalUser.name}</h4>
            <h6>{state.modalUser.details.email}</h6>
            <nav>
              <a href={"/users/" + state.modalUser.id + "?tab=0"}>bio</a>
              <a href={"/users/" + state.modalUser.id + "?tab=1"}>address</a>
            </nav>
            {state.currentUserModalTabIndex === 0 ? (
              <div className="tab-content">{state.modalUser.details.bio}</div>
            ) : null}
            {state.currentUserModalTabIndex === 1 ? (
              <div className="tab-content">{state.modalUser.details.address}</div>
            ) : null}
          </>
        )}
      </div>
    </a>
  )
}

export default UserModal
    `,
    },
  ],
  vue: javascript.vue,
  angular: [
    {
      fileName: 'components/app-component.ts',
      code: `
import { Component } from '@angular/core';
import { connect } from '../overmind'

@Component({
  selector: 'app-component',
  template: \`
  <div class="container">
    <nav>
      <a href="/">Home</a>
      <a href="/users">Users</a>
    </nav>
    <h1 *ngIf="overmind.state.currentPage === 'home'">Hello world!</h1>
    <users-list *ngIf="overmind.state.currentPage === 'users'"></users-list>
  </div>
  \`
})
@connect()
export class AppComponent {}
    `,
    },
    {
      fileName: 'components/users-list.ts',
      code: `
import { Component } from '@angular/core';
import { connect } from '../overmind'

@Component({
  selector: 'users-list',
  template: \`
  <div class="content">
    <h4 *ngIf="overmind.state.isLoadingUsers">Loading users...</h4>
    <ul *ngIf="!overmind.state.isLoadingUsers">
      <li *ngFor="let user of overmind.state.users;trackby: trackById">
        <a href={"/users/" + user.id}>{{user.name}}</a>
      </li>
    </ul>
    <user-modal *ngIf="overmind.state.isLoadingUserDetails || overmind.state.userModal"></user-modal>
  </div>
  \`
})
@connect()
export class UsersList {
  trackById(index, user) {
    return user.id
  }
}
    `,
    },
    {
      fileName: 'components/user-modal.ts',
      code: `
import { Component } from '@angular/core';
import { connect } from '../overmind'

@Component({
  selector: 'user-modal',
  template: \`
  <a href="/users" class="backdrop">
    <div class="modal">
      <h4 *ngIf="overmind.state.isLoadingUserDetails">Loading user details...</h4>
      <div *ngIf="!overmind.state.isLoadingUserDetails">
        <h4>{{overmind.state.modalUser.name}}</h4>
        <h6>{{overmind.state.modalUser.details.email}}</h6>
        <nav>
          <a [href]="'/users/' + overmind.state.modalUser.id + '?tab=0'">bio</a>
          <a [href]="'/users/' + overmind.state.modalUser.id + '?tab=1'">address</a>
        </nav>
        <div
          *ngIf="overmind.state.currentUserModalTabIndex === 0"
          class="tab-content"
        >
          {{modalUser.details.bio}}
        </div>
        <div
          *ngIf="overmind.state.currentUserModalTabIndex === 1"
          class="tab-content"
        >
          {{modalUser.details.address}}
        </div>
      </div>
    </div>
  </a>
  \`
})
@connect()
export class UserModal {}
    `,
    },
  ],
}

export default (ts, view) => (ts ? typescript[view] : javascript[view])
