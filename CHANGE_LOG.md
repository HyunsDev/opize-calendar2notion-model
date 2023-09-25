## v2.1.0

    - `entity` 와 이에 대한 의존성을 다시 복구했습니다.

## v2.0.1

-   필요없는 의존성을 삭제했습니다.

## v2.0.0

-   `UserNotionProps`에 `last_edited_by`를 추가했습니다.
-   모든 `entity`와 이에 대한 의존성을 삭제했습니다. 이제 entity와 관련된 의존성은 `@opize/calendar2notion-backend` 에서 관리하며 `@opize/calendar2notion-object`는 `dto`와 `endpoint` 만 관리합니다.
