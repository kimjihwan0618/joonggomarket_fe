import BoardWrite from "src/components/units/board/write/BoardWrite.container"
import { FETCH_BOARD } from "src/components/units/board/detail/BoardDetail.queries"
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
    skip: !router.query.boardId,
  });
  return <BoardWrite isEdit={true} data={data} />
}
