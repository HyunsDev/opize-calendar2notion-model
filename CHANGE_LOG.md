## v2.2.0

-   `SyncEntity`를 삭제하고 해당 엔티티의 내용을 `UserEntity`에 합쳤어요.

## v2.1.5

-   `UserEntity`의 sync 속성이 잘못되어 있는 문제를 수정했어요.

## v2.1.4

-   `SyncEntity`에 생성자를 추가하고 일부 타입을 변경했어요.

## v2.1.3

-   `SyncEntity`에 Primary column이 없는 문제를 해결했어요.

## v2.1.2

-   `SyncEntity`가 export 가 되지 않는 문제를 해결했어요.

## v2.1.1

    - `userEntity`에 `isSyncAdditionalProps`를 추가했어요.

## v2.1.0

    - `entity` 와 이에 대한 의존성을 다시 복구했습니다.

## v2.0.1

-   필요없는 의존성을 삭제했습니다.

## v2.0.0

-   `UserNotionProps`에 `last_edited_by`를 추가했습니다.
-   모든 `entity`와 이에 대한 의존성을 삭제했습니다. 이제 entity와 관련된 의존성은 `@opize/calendar2notion-backend` 에서 관리하며 `@opize/calendar2notion-object`는 `dto`와 `endpoint` 만 관리합니다.
