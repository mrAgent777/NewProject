name: Request a cherry-pick.
description: As a contributor, you would like to request that a feature be cherry-picked into a release.
title: '[CP] <title>'
labels: ['cp: review']
body:
  - type: input
    id: issue_link
    attributes:
      label: issue_link
      description: What is the link to the issue this cherry-pick is addressing?
    validations:
      required: true
  - type: input
    id: commit_hash
    attributes:
      label: Commit Hash
      description: What is the shortened commit hash that has been merged to master/main?
    validations:
      required: true
  - type: input
    id: impacted_users
    attributes:
      label: Impacted Users
      description: Approximately who will hit this issue (ex. all Flutter devs, Windows developers, all end-customers, apps using X framework feature)?
