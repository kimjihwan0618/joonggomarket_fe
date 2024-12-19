import { render, screen, waitFor } from '@testing-library/react'
import BoardListUI from 'src/components/units/board/list/BoardList.index'
import { useQueryFetchBoards } from 'src/components/commons/hooks/quires/board/useQueryFetchBoards'
import { useQueryFetchBoardsCount } from 'src/components/commons/hooks/quires/board/useQueryFetchBoardsCount'
import React from 'react'

// Mock the hooks
jest.mock('src/components/commons/hooks/quires/board/useQueryFetchBoards')
jest.mock('src/components/commons/hooks/quires/board/useQueryFetchBoardsCount')

describe('BoardListUI', () => {
  const mockBoards = {
    fetchBoards: [
      { _id: '1', title: '게시글 1', writer: '작성자 1', createdAt: new Date(), likeCount: 10 },
      { _id: '2', title: '게시글 2', writer: '작성자 2', createdAt: new Date(), likeCount: 5 },
    ],
  }

  const mockCount = {
    fetchBoardsCount: 2,
  }

  beforeEach(() => {
    ;(useQueryFetchBoards as jest.Mock).mockReturnValue({
      data: mockBoards,
      refetch: jest.fn(),
    })
    ;(useQueryFetchBoardsCount as jest.Mock).mockReturnValue({
      data: mockCount,
      refetch: jest.fn(),
    })
  })

  it('renders the board list and displays the correct data', async () => {
    render(<BoardListUI />)

    // Wait for the table to be populated
    await waitFor(() => {
      expect(screen.getByText('게시글 1')).toBeInTheDocument()
      expect(screen.getByText('게시글 2')).toBeInTheDocument()
      expect(screen.getByText('작성자 1')).toBeInTheDocument()
      expect(screen.getByText('작성자 2')).toBeInTheDocument()
      expect(screen.getByText('10')).toBeInTheDocument()
      expect(screen.getByText('5')).toBeInTheDocument()
    })
  })
})
