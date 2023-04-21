const answer = `NPM(Node Package Manager)은 노드의 패키지 매니저 이다 
npm은 다른 사람들이 만든 소스 코드들을 모아둔 저장소라서 남의 코드를 사용하여 프로그래밍 가능하고
이미 있는 기능을 다시 구현할 필요가 없어 효율적이다. 패키지: npm에 업로드된 노드 모듈 이 있다.

yarn, npm, pnpm은 모두 Node.js 패키지 매니저입니다. 이들은 프로젝트의 의존성을 관리하고, 패키지를 설치하고, 업데이트하고, 삭제하고, 버전을 관리하는 데 사용됩니다.

Yarn은 Facebook에서 개발한 패키지 매니저로, npm보다 더 빠른 설치 속도와 더 나은 보안 기능을 제공합니다. Yarn은 npm registry와 호환되며, package.json 파일을 사용하여 프로젝트의 의존성을 관리합니다.

npm은 Node.js 패키지 매니저로, npm registry를 사용하여 패키지를 관리합니다. npm은 대부분의 Node.js 개발자들이 사용하는 기본 패키지 매니저입니다.

pnpm은 Yarn과 npm과 유사한 패키지 매니저로, 중복된 의존성을 공유하는 것을 허용하여 디스크 공간을 절약하고, 설치 속도를 높입니다. 또한, 공통 의존성을 공유하는 경우, 여러 프로젝트에서 동일한 패키지 버전을 사용할 수 있습니다.

요약하면, Yarn은 npm보다 더 빠른 설치 속도와 더 나은 보안 기능을 제공하며, pnpm은 Yarn과 유사하지만 디스크 공간을 절약하고 설치 속도를 높입니다. 선택은 개발자의 취향에 따라 다를 수 있습니다.

node 프로젝트 생성은 node 설치후 vscode에 터미널을 사용해서  npm init -y 명령어를 치면 폴더에 package.json 파일이 생성 후
이제 Node 프로젝트에 필요한 모듈을 두가지 받아야 합니다. 첫번째 모듈은 express 모듈 입니다. 'npm install express' 명령어를 터미널에 치신 후 Enter 두번째로는 'npm install ejs'라고 터미널에 명령어를 입력 후 enter를 쳐주시면 두개의 모듈이 설치 됩니다.
이후 해당 index.js파일 생성후 해당 코드를 작성한다. 이후 node index.js 명령어를 사용하면 노드가 실행된다
`
const express = require('express')
const index = express()

index.get('/', (req, res) => {
  res.send(answer)
})

index.listen(3000, () => {
  console.log('Server started on port 3000')
})