---
  layout: post
  title: DFS, BFS
  description: 탐색 알고리즘에 대해 알아보자.
  tags:
    - algorithm
  comments: true
  share: true
  date: 2017-3-15
---

# BFS, DFS

**시작점을 기준으로** 탐색가능한 모든 노드를 탐색한다.

**모든 노드를 탐색할 때 사용한다.**

## DFS

- `스택`을 이용하여 갈 수 있는만큼 최대한 간다.
- 갈 수 없으면 이전 정점으로 간다.

## BFS

- `큐`를 이용하여 지금위치에서 갈 수 있는 모두 큐에 넣는다.
- 방문 할 수 있을 때까지 즉, `큐`에 데이터가 있을 떄까지 반복한다.

```C
	void DFS(start){
		print(start);
		isVisited[start] = true;
		for(i< 정점 개수){
			if(isConnected[start][i] && !isVisited[start]){
				DFS(i);
			}
		}
	}

	void BFS(start){
		vector <int> que;

		print(start);
		que.push(start);

		while(!que.empty()){
			node_changed = que.front();
			que.pop();

			for(int i = 0; i<정점개수;i++){
				if(isConnected[node_changed][i]){
					isVisited[i]=true;
					que.push(i);
					print(i);
				}
			}

		}
	}
```

## 관련문제

[11403번 경로 찾기](https://www.acmicpc.net/problem/11403)

### 회고

- 문제를 제대로 읽자. 종이에 코딩하면 다시 따라쓰면서 곱씹자
	- 가중치 없는 방향 그래프 : 양방향으로 착각하여 문제 푸는데 오래 걸렸다.

- 결과값을 명확히!
	- i에서 j로 가는 경로 유무를 구한다고 했다. 즉, 연결된 노드를 찾는게 아닌, 갈 수 있는지 없는지에 대해 파악해야 했다.
	- `갈 수 있는지 없는지`는 `연결된 노드를 통해 탐색 가능한지` 와 동일하다.
	- 즉, **시작점으로부터 방문 가능한 노드 까지 방문을 반복**하는 `DFS`, `BFS`로 풀 수 있는 문제였다.

- `fill_n(초기화할 변수, 초기화할 길이, 초기화할 값)`

-  경로 찾기, 출발점에 따라 방문할 수 있는 곳이 달라 질 수 있는 것을 출력은 `DFS`, `BFS`와 같은 탐색을 사용할 수 있다.

	- bfs는 가중치가 1인 그래프의 최단거리, 최소횟수를 구할 때 사용하자
	- dfs는 모두 탐색해야 할 때 사용하자.

알고리즘은 쉬운 알고리즘인데 문제에서 상태를 node로 표현해서 그래프를 만들기만 하면 어려운 문제도 잘 풀수있다고 한다.


```C
int connectedTable[101][101];
int completedTable[101][101];
bool isVisited[101];

void traverseDFS(int start, int dfs_start ,int size){
    for(int i = 0; i < size; i++){
        if(connectedTable[dfs_start][i] == 1 && !isVisited[i]){
            completedTable[start][i] = 1;
            isVisited[i] = true;
            if(start != i) traverseDFS(start, i, size);
        }
    }
}

void traverseBFS(int start, int size){
    queue <int> que;
    que.push(start);

    for(int i = 0; i < size; i++){
        if(!que.empty()){
            int tempStart = que.front();
            que.pop();

            for(int j = 0; j < size; j++){
                if(connectedTable[tempStart][j]==1 && !isVisited[j]){
                    completedTable[start][j] = 1;
                    que.push(j);
                    isVisited[j] = true;
                }
            }
        }
    }
}

int main() {
    int size, isConnected;

    scanf("%d", &size);

    for (int i = 0; i < size; i++){
        for(int j = 0; j < size; j++){
            scanf("%d", &isConnected);
            connectedTable[i][j] = isConnected;
        }
    }
    for(int i = 0; i< size; i++){
        fill_n(isVisited, 101, false);
        traverseDFS(i, i,size);
//      traverseBFS(i, size);
    }

    for (int i = 0; i < size; i++){
        for(int j = 0; j < size; j++) {
            printf("%d ", completedTable[i][j]);
        }
        printf("\n");
    }
    return 0;
}
```
